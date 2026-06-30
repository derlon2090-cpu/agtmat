const express = require("express");
const bcrypt = require("bcryptjs");
const { z } = require("zod");
const { prisma } = require("../lib/prisma");
const { authLimiter } = require("../middleware/rate-limit");
const { cookieOptions, signUserToken, signAdminToken } = require("../middleware/auth");
const { HttpError } = require("../lib/http-error");
const { auditLog } = require("../lib/audit");

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

async function loginUser(req, res, next, { admin = false } = {}) {
  try {
    const input = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email: input.email } });

    if (!user || user.status !== "active") throw new HttpError(401, "Invalid credentials");
    if (admin && !["admin", "super_admin"].includes(user.role)) throw new HttpError(403, "Forbidden");

    const valid = await bcrypt.compare(input.password, user.passwordHash);
    if (!valid) throw new HttpError(401, "Invalid credentials");

    await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
    await auditLog({ actorId: user.id, action: admin ? "admin.login" : "auth.login", ip: req.ip });

    const token = admin ? signAdminToken(user) : signUserToken(user);
    res.cookie(admin ? "admin_token" : "user_token", token, cookieOptions(8 * 60 * 60 * 1000));
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status
      }
    });
  } catch (err) {
    next(err);
  }
}

router.post("/api/auth/login", authLimiter, (req, res, next) => loginUser(req, res, next));
router.post("/api/admin/auth/login", authLimiter, (req, res, next) => loginUser(req, res, next, { admin: true }));

router.post("/api/auth/logout", (req, res) => {
  res.clearCookie("user_token", cookieOptions(0));
  res.clearCookie("admin_token", cookieOptions(0));
  res.json({ ok: true });
});

module.exports = { authRouter: router };

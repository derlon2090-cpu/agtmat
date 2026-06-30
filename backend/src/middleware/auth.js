const jwt = require("jsonwebtoken");
const { config } = require("../lib/config");
const { prisma } = require("../lib/prisma");
const { HttpError } = require("../lib/http-error");

function cookieOptions(maxAgeMs) {
  return {
    httpOnly: true,
    secure: config.isProduction,
    sameSite: config.isProduction ? "none" : "lax",
    domain: config.cookieDomain,
    maxAge: maxAgeMs,
    path: "/"
  };
}

function signUserToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role, type: "user" },
    config.jwtSecret,
    { expiresIn: "8h" }
  );
}

function signAdminToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role, type: "admin" },
    config.adminJwtSecret,
    { expiresIn: "8h" }
  );
}

function readToken(req, cookieName) {
  const bearer = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7)
    : null;
  return req.cookies?.[cookieName] || bearer;
}

async function requireAdmin(req, res, next) {
  try {
    const token = readToken(req, "admin_token");
    if (!token) throw new HttpError(401, "Unauthorized");

    const payload = jwt.verify(token, config.adminJwtSecret);
    if (!["admin", "super_admin"].includes(payload.role)) {
      throw new HttpError(403, "Forbidden");
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, name: true, email: true, role: true, status: true }
    });

    if (!user || user.status !== "active") throw new HttpError(401, "Unauthorized");
    if (!["admin", "super_admin"].includes(user.role)) throw new HttpError(403, "Forbidden");

    req.admin = user;
    return next();
  } catch (err) {
    return next(err.statusCode ? err : new HttpError(401, "Unauthorized"));
  }
}

module.exports = {
  cookieOptions,
  signUserToken,
  signAdminToken,
  requireAdmin
};

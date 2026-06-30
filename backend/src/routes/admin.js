const express = require("express");
const { requireAdmin } = require("../middleware/auth");
const { auditLog } = require("../lib/audit");
const {
  getAdminOverview,
  getUsersStats,
  getCollectionStats,
  listUsers
} = require("../services/admin-service");

const router = express.Router();

router.use("/api/admin", requireAdmin);

router.get("/api/admin/overview", async (req, res, next) => {
  try {
    await auditLog({ actorId: req.admin.id, action: "admin.overview.read", ip: req.ip });
    res.json(await getAdminOverview());
  } catch (err) {
    next(err);
  }
});

router.get("/api/admin/users", async (req, res, next) => {
  try {
    await auditLog({ actorId: req.admin.id, action: "admin.users.read", ip: req.ip });
    res.json({ users: await listUsers() });
  } catch (err) {
    next(err);
  }
});

router.get("/api/admin/users/stats", async (req, res, next) => {
  try {
    res.json(await getUsersStats());
  } catch (err) {
    next(err);
  }
});

[
  "meetings",
  "teams",
  "subscriptions",
  "invoices",
  "support",
  "security",
  "analytics",
  "settings"
].forEach((kind) => {
  router.get(`/api/admin/${kind}`, async (req, res, next) => {
    try {
      await auditLog({ actorId: req.admin.id, action: `admin.${kind}.read`, ip: req.ip });
      res.json({ stats: await getCollectionStats(kind), items: [] });
    } catch (err) {
      next(err);
    }
  });

  router.get(`/api/admin/${kind}/stats`, async (req, res, next) => {
    try {
      res.json(await getCollectionStats(kind));
    } catch (err) {
      next(err);
    }
  });
});

module.exports = { adminRouter: router };

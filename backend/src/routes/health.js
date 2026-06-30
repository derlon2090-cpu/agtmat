const express = require("express");
const { prisma } = require("../lib/prisma");

const router = express.Router();

router.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  } catch {
    res.status(503).json({
      status: "error",
      database: "disconnected",
      timestamp: new Date().toISOString()
    });
  }
});

router.get("/api/health/db", async (req, res) => {
  const start = Date.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, latencyMs: Date.now() - start });
  } catch {
    res.status(503).json({ ok: false, latencyMs: Date.now() - start });
  }
});

module.exports = { healthRouter: router };

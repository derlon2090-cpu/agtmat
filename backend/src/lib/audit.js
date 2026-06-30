const { prisma } = require("./prisma");
const { logger } = require("./logger");

async function auditLog({ actorId, action, target, metadata, ip }) {
  try {
    await prisma.auditLog.create({
      data: {
        actorId: actorId || null,
        action,
        target: target || null,
        metadata: metadata || undefined,
        ip: ip || null
      }
    });
  } catch (err) {
    logger.error({ err, action }, "Failed to write audit log");
  }
}

module.exports = { auditLog };

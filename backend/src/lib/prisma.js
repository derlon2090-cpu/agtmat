const { PrismaClient } = require("@prisma/client");
const { config } = require("./config");

const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.__vexwynPrisma ||
  new PrismaClient({
    log: config.isProduction ? ["error"] : ["query", "error", "warn"]
  });

if (!config.isProduction) {
  globalForPrisma.__vexwynPrisma = prisma;
}

module.exports = { prisma };

const bcrypt = require("bcryptjs");
const { prisma } = require("../src/lib/prisma");
const { logger } = require("../src/lib/logger");

async function main() {
  const email = process.env.INITIAL_ADMIN_EMAIL;
  const password = process.env.INITIAL_ADMIN_PASSWORD;
  const name = process.env.INITIAL_ADMIN_NAME || "System Admin";

  if (!email || !password) {
    logger.info("Initial admin env not provided. Skipping.");
    return;
  }

  const existingAdmin = await prisma.user.findFirst({
    where: { role: { in: ["admin", "super_admin"] } }
  });

  if (existingAdmin) {
    logger.info("Admin already exists. Skipping.");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      role: "super_admin",
      status: "active",
      mfaEnabled: true
    }
  });

  logger.info("Initial admin created.");
}

main()
  .catch((err) => {
    logger.error({ err }, "Failed to create initial admin");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

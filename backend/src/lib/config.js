function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

function envList(name) {
  return (process.env[name] || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

const isProduction = process.env.NODE_ENV === "production";

const config = {
  isProduction,
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET || "",
  adminJwtSecret: process.env.ADMIN_JWT_SECRET || "",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:4173",
  adminUrl: process.env.ADMIN_URL || process.env.FRONTEND_URL || "http://localhost:4173",
  apiUrl: process.env.API_URL || "",
  corsOrigins: envList("CORS_ORIGINS"),
  cookieDomain: process.env.COOKIE_DOMAIN || undefined,
  enableDemoData: process.env.ENABLE_DEMO_DATA === "true"
};

function assertProductionConfig() {
  if (!isProduction) return;
  requiredEnv("DATABASE_URL");
  requiredEnv("JWT_SECRET");
  requiredEnv("ADMIN_JWT_SECRET");
  if (config.jwtSecret === config.adminJwtSecret) {
    throw new Error("JWT_SECRET and ADMIN_JWT_SECRET must be different");
  }
  if (config.enableDemoData) {
    throw new Error("ENABLE_DEMO_DATA must be false in production");
  }
}

module.exports = { config, assertProductionConfig };

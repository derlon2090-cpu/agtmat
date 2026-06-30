const pino = require("pino");
const { config } = require("./config");

const redact = [
  "req.headers.authorization",
  "req.headers.cookie",
  "password",
  "passwordHash",
  "token",
  "DATABASE_URL",
  "JWT_SECRET",
  "ADMIN_JWT_SECRET"
];

const logger = pino({
  level: config.isProduction ? "info" : "debug",
  redact
});

module.exports = { logger };

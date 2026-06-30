const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const { config, assertProductionConfig } = require("./lib/config");
const { logger } = require("./lib/logger");
const { corsMiddleware } = require("./middleware/cors");
const { errorHandler, notFoundHandler } = require("./middleware/error-handler");

assertProductionConfig();

const { healthRouter } = require("./routes/health");
const { authRouter } = require("./routes/auth");
const { adminRouter } = require("./routes/admin");

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(compression());
app.use(corsMiddleware());
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

app.use(healthRouter);
app.use(authRouter);
app.use(adminRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(config.port, () => {
  logger.info({ port: config.port }, "Vexwyn backend is running");
});

function shutdown(signal) {
  logger.info({ signal }, "Shutting down");
  server.close(() => process.exit(0));
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

module.exports = { app };

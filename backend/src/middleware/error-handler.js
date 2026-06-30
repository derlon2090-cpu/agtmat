const { logger } = require("../lib/logger");
const { config } = require("../lib/config");
const { ZodError } = require("zod");

function notFoundHandler(req, res) {
  res.status(404).json({ message: "Not found" });
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Invalid request body",
      issues: err.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message
      }))
    });
  }

  logger.error({ err, path: req.path }, "Unhandled request error");
  const statusCode = err.statusCode || 500;
  const message = config.isProduction && statusCode >= 500
    ? "Unexpected server error"
    : err.message || "Unexpected server error";

  return res.status(statusCode).json({ message });
}

module.exports = { notFoundHandler, errorHandler };

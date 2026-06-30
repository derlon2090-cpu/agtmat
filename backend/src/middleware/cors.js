const cors = require("cors");
const { config } = require("../lib/config");

function corsMiddleware() {
  const allowedOrigins = new Set(config.corsOrigins);
  if (!config.isProduction) {
    allowedOrigins.add("http://localhost:4173");
    allowedOrigins.add("http://127.0.0.1:4173");
    allowedOrigins.add("http://localhost:3000");
  }

  return cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.has(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true
  });
}

module.exports = { corsMiddleware };

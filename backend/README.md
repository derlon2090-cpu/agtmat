# Vexwyn Backend

Production backend for Vexwyn admin data, Render, Prisma, and PostgreSQL.

## Render

Use these commands in the Render Web Service:

```bash
Build Command: npm install && npx prisma generate
Start Command: npx prisma migrate deploy && npm run start
Health Check Path: /health
```

Set environment variables from `.env.example` in Render. Never commit `.env`.

## One-time admin

After the first deploy, set `INITIAL_ADMIN_EMAIL`, `INITIAL_ADMIN_PASSWORD`, and `INITIAL_ADMIN_NAME`, then run:

```bash
npm run create-admin
```

The script skips creation if an admin already exists.

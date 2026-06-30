const { prisma } = require("../lib/prisma");

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function startOfMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

function money(value) {
  if (!value) return 0;
  return Number(value);
}

async function getAdminOverview() {
  const today = startOfToday();
  const month = startOfMonth();

  const [
    totalUsers,
    activeUsers,
    adminUsers,
    protectedUsers,
    totalTeams,
    activeTeams,
    totalMeetings,
    liveMeetings,
    scheduledToday,
    openTickets,
    activeSubscriptions,
    paidInvoices,
    paidRevenue,
    securityEvents
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { status: "active" } }),
    prisma.user.count({ where: { role: { in: ["admin", "super_admin"] } } }),
    prisma.user.count({ where: { mfaEnabled: true } }),
    prisma.team.count(),
    prisma.team.count({ where: { status: "active" } }),
    prisma.meeting.count(),
    prisma.meeting.count({ where: { status: "live" } }),
    prisma.meeting.count({ where: { status: "scheduled", startsAt: { gte: today } } }),
    prisma.supportTicket.count({ where: { status: { in: ["open", "in_progress"] } } }),
    prisma.subscription.count({ where: { status: "active" } }),
    prisma.invoice.count({ where: { status: "paid" } }),
    prisma.invoice.aggregate({
      where: { status: "paid", paidAt: { gte: month } },
      _sum: { amount: true }
    }),
    prisma.securityEvent.count({ where: { status: "open" } })
  ]);

  return {
    users: { total: totalUsers, active: activeUsers, admins: adminUsers, mfaEnabled: protectedUsers },
    teams: { total: totalTeams, active: activeTeams },
    meetings: { total: totalMeetings, liveNow: liveMeetings, scheduledToday },
    support: { openTickets },
    billing: {
      activeSubscriptions,
      paidInvoices,
      revenueThisMonth: money(paidRevenue._sum.amount),
      currency: "SAR"
    },
    security: { openEvents: securityEvents },
    chart: [],
    empty: totalUsers + totalTeams + totalMeetings === 0
  };
}

async function getUsersStats() {
  const [total, active, suspended, pending, admins, mfaEnabled] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { status: "active" } }),
    prisma.user.count({ where: { status: "suspended" } }),
    prisma.user.count({ where: { status: "pending" } }),
    prisma.user.count({ where: { role: { in: ["admin", "super_admin"] } } }),
    prisma.user.count({ where: { mfaEnabled: true } })
  ]);
  return { total, active, suspended, pending, admins, mfaEnabled };
}

async function getCollectionStats(kind) {
  const map = {
    meetings: async () => ({
      total: await prisma.meeting.count(),
      liveNow: await prisma.meeting.count({ where: { status: "live" } }),
      scheduledToday: await prisma.meeting.count({ where: { status: "scheduled", startsAt: { gte: startOfToday() } } })
    }),
    teams: async () => ({
      total: await prisma.team.count(),
      active: await prisma.team.count({ where: { status: "active" } })
    }),
    subscriptions: async () => ({
      total: await prisma.subscription.count(),
      active: await prisma.subscription.count({ where: { status: "active" } })
    }),
    invoices: async () => ({
      total: await prisma.invoice.count(),
      paid: await prisma.invoice.count({ where: { status: "paid" } }),
      revenueThisMonth: money((await prisma.invoice.aggregate({
        where: { status: "paid", paidAt: { gte: startOfMonth() } },
        _sum: { amount: true }
      }))._sum.amount)
    }),
    support: async () => ({
      total: await prisma.supportTicket.count(),
      open: await prisma.supportTicket.count({ where: { status: { in: ["open", "in_progress"] } } })
    }),
    security: async () => ({
      total: await prisma.securityEvent.count(),
      open: await prisma.securityEvent.count({ where: { status: "open" } }),
      critical: await prisma.securityEvent.count({ where: { severity: "critical" } })
    }),
    analytics: getAdminOverview,
    settings: async () => ({
      total: await prisma.setting.count()
    })
  };

  const resolver = map[kind];
  return resolver ? resolver() : {};
}

async function listUsers() {
  return prisma.user.findMany({
    take: 50,
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, email: true, role: true, status: true, createdAt: true, lastLoginAt: true }
  });
}

module.exports = {
  getAdminOverview,
  getUsersStats,
  getCollectionStats,
  listUsers
};

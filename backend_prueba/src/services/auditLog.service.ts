import { prisma } from "../database/prisma.client.js";

export class AuditLogService {
  async getAll() {
    return prisma.auditLog.findMany({
      include: {
        actor: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }
}

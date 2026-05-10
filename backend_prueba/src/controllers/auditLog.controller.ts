import { Request, Response } from "express";
import { AuditLogService } from "../services/auditLog.service.js";

export class AuditLogController {
  private auditLogService: AuditLogService;

  constructor() {
    this.auditLogService = new AuditLogService();
  }

  getAll = async (_req: Request, res: Response) => {
    try {
      const auditLogs = await this.auditLogService.getAll();
      res.json(auditLogs);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error al obtener los registros de auditoría" });
    }
  };
}

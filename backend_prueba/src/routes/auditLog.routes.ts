import { Router } from "express";
import { AuditLogController } from "@/controllers/auditLog.controller.js";
import { requireRole } from "@/auth/auth.middleware.js";

const router = Router();
const auditLogController = new AuditLogController();

router.get("/", requireRole(["ADMIN"]), auditLogController.getAll);

export { router as auditLogRoutes };

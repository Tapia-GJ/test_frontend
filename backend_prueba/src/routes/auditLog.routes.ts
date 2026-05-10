import { Router } from "express";
import { AuditLogController } from "@/controllers/auditLog.controller.js";

const router = Router();
const auditLogController = new AuditLogController();

router.get("/", auditLogController.getAll);

export { router as auditLogRoutes };

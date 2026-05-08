import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { requireRole } from "@/auth/auth.middleware.js";

const router = Router();
const userController = new UserController();

router.get("/", userController.getAll);
router.post("/", requireRole(["ADMIN"]), userController.create);
router.put("/:id", requireRole(["ADMIN"]), userController.update);
router.delete("/:id", requireRole(["ADMIN"]), userController.delete);

export { router as userRoutes };

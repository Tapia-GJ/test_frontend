import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();
const userController = new UserController();

router.get("/", userController.getAll);
router.post("/", userController.create);

export { router as userRoutes };

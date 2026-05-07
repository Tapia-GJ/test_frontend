import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();
const userController = new UserController();

router.get("/", userController.getAll);
router.post("/", userController.create);
router.put("/:id", userController.update);

export { router as userRoutes };

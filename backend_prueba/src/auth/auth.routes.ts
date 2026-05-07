import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { UserService } from "../services/user.service.js";

const router = Router();
const authService = new AuthService();
const userService = new UserService();
const authController = new AuthController(authService, userService);

router.post("/login", authController.login);

export { router as authRoutes };

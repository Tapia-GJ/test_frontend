import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { authRoutes } from "../auth/auth.routes.js";
import { authMiddleware } from "@/auth/auth.middleware.js";

const router = Router();

router.use("/login", authRoutes);
router.use("/users", authMiddleware(), userRoutes);

export { router };

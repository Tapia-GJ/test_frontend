import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { authRoutes } from "../auth/auth.routes.js";

const router = Router();

router.use("/login", authRoutes);
router.use("/users", userRoutes);

export { router };

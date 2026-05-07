import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
      };
    }
  }
}

export const authMiddleware = () => {
  const authService = new AuthService();

  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({ error: "Missing authorization header" });
      }

      const parts = authHeader.split(" ");
      if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ error: "Invalid authorization format" });
      }

      const token = parts[1];
      try {
        const payload = authService.verifyToken(token);
        req.user = { userId: payload.userId };
        next();
      } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }
    } catch (error) {
      console.error("Auth middleware error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
};

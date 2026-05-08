import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        role: string;
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
        return res.status(401).json({ error: "Falta el encabezado de autorización" });
      }

      const parts = authHeader.split(" ");
      if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ error: "Formato de autorización inválido" });
      }

      const token = parts[1];
      try {
        const payload = authService.verifyToken(token);
        req.user = { userId: payload.userId, role: payload.role };
        next();
      } catch (err) {
        return res.status(401).json({ error: "Token inválido o expirado" });
      }
    } catch (error) {
      console.error("Error en middleware de autenticación:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
};

export const requireRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: "No autenticado" });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Sin permisos para realizar esta acción" });
    }
    next();
  };
};

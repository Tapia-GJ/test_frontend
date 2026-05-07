import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";
import { CreateUserSchema } from "../models/user.dto.js";
import { ZodError } from "zod";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getAll = async (_req: Request, res: Response) => {
    try {
      const users = await this.userService.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const validatedData = CreateUserSchema.parse(req.body);
      const newUser = await this.userService.create(validatedData);

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);

      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Datos de validación incorrectos",
          details: error.flatten().fieldErrors,
        });
      }

      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as any).code === "P2002"
      ) {
        return res.status(409).json({ error: "El email ya está registrado" });
      }

      res.status(500).json({ error: "Error al crear el usuario" });
    }
  };
}

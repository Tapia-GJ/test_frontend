import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";
import { CreateUserSchema, UpdateUserSchema } from "../models/user.dto.js";
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

  update = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id as string, 10);
      if (isNaN(userId)) {
        return res
          .status(400)
          .json({ error: "El ID proporcionado no es válido" });
      }

      const validatedData = UpdateUserSchema.parse(req.body);
      const updatedUser = await this.userService.update(userId, validatedData);

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        console.log("errores", error.flatten);

        return res.status(400).json({
          error: "Datos de actualización incorrectos",
          details: error.flatten().fieldErrors,
        });
      }
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as any).code === "P2025"
      ) {
        return res.status(404).json({ error: "El usuario no existe" });
      }

      res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id as string, 10);
      if (isNaN(userId)) {
        return res
          .status(400)
          .json({ error: "El ID proporcionado no es válido" });
      }

      await this.userService.delete(userId);
      res.status(204).send();
    } catch (error) {
      console.error(error);

      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as any).code === "P2025"
      ) {
        return res.status(404).json({ error: "El usuario no existe" });
      }
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  };
}

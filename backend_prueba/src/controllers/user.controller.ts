import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

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
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  };

  create = async (_req: Request, res: Response) => {};
}

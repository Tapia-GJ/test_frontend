import { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { UserService } from "../services/user.service.js";

export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          error: "se requiere correo y contraseña",
        });
      }

      const user = await this.userService.getByEmail(email);
      if (!user) {
        return res
          .status(401)
          .json({ error: "correo o contraseña incorrectos" });
      }

      const isPasswordValid = await this.authService.validatePassword(
        password,
        user.password || "",
      );
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ error: "correo o contraseña incorrectos" });
      }

      const token = this.authService.generateToken(user.id);

      return res.status(200).json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: "Error al ingresar" });
    }
  };
}

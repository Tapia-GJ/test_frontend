import * as bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token-test";

export interface TokenPayload {
  userId: number;
  iat: number;
  exp: number;
}

export class AuthService {
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcryptjs.hash(password, saltRounds);
  }

  async validatePassword(password: string, hashed: string): Promise<boolean> {
    return bcryptjs.compare(password, hashed);
  }

  generateToken(userId: number): string {
    return jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: "24h",
    });
  }

  verifyToken(token: string): TokenPayload {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  }
}

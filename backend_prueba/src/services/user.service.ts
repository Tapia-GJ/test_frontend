import { prisma } from "../database/prisma.client.js";
import { type CreateUserDTO } from "@/models/user.dto.js";
export class UserService {
  async getAll() {
    return prisma.user.findMany();
  }

  async create(data: CreateUserDTO) {
    return prisma.user.create({ data });
  }
}

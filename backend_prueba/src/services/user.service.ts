import { prisma } from "../database/prisma.client.js";
import { type CreateUserDTO, type UpdateUserDTO } from "@/models/user.dto.js";

export class UserService {
  async getAll() {
    return prisma.user.findMany();
  }

  async getByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserDTO) {
    return prisma.user.create({ data });
  }

  async update(id: number, data: UpdateUserDTO) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }
}

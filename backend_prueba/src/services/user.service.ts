import { prisma } from "../database/prisma.client.js";
import { type CreateUserDTO, type UpdateUserDTO } from "@/models/user.dto.js";
import * as bcryptjs from "bcryptjs";

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
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    return prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async update(id: number, data: UpdateUserDTO) {
    if (data.password) {
      data.password = await bcryptjs.hash(data.password, 10);
    }
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

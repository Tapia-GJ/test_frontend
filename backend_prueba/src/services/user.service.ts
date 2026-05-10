import { prisma } from "../database/prisma.client.js";
import { type CreateUserDTO, type UpdateUserDTO } from "@/models/user.dto.js";
import * as bcryptjs from "bcryptjs";

export class UserService {
  async getAll() {
    return prisma.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async getById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async getByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserDTO, actorId: number) {
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    await prisma.auditLog.create({
      data: {
        action: "CREATE",
        entityId: newUser.id,
        actorId: actorId,
        details: JSON.stringify({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        }),
      },
    });
    return newUser;
  }

  async update(id: number, data: UpdateUserDTO, actorId: number) {
    if (data.password) {
      data.password = await bcryptjs.hash(data.password, 10);
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });

    await prisma.auditLog.create({
      data: {
        action: "UPDATE",
        entityId: updatedUser.id,
        actorId: actorId,
        details: JSON.stringify({
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
        }),
      },
    });
    return updatedUser;
  }

  async delete(id: number, actorId: number) {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    await prisma.auditLog.create({
      data: {
        action: "DELETE",
        entityId: deletedUser.id,
        actorId: actorId,
      },
    });

    return deletedUser;
  }
}

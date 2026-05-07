import { describe, it, expect, vi } from "vitest";
import { UserService } from "./user.service.js";
import { prisma } from "../database/prisma.client.js";

vi.mock("../database/prisma.client.js", () => ({
  prisma: {
    user: {
      findMany: vi.fn(),
    },
  },
}));

describe("UserService", () => {
  it("debe retornar una lista de usuarios", async () => {
    const userService = new UserService();
    const mockUsers = [
      { id: 1, email: "test@test.com", name: "Test", age: 18, role: "USER" },
    ];

    vi.mocked(prisma.user.findMany).mockResolvedValue(mockUsers);

    const users = await userService.getAll();

    expect(users).toEqual(mockUsers);
    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    expect(users).toHaveLength(1);
    expect(users[0].email).toBe("test@test.com");
  });
});

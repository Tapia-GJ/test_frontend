import { prisma } from "../src/database/prisma.client.js";
import bcryptjs from "bcryptjs";

async function main() {
  const password = await bcryptjs.hash("password1234", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@test.com" },
    update: {},
    create: {
      email: "admin@test.com",
      name: "Admin User",
      age: 35,
      role: "ADMIN",
      password: password,
    },
  });
  console.log("Admin creado:", admin.email);

  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      name: "Normal User",
      age: 25,
      role: "USER",
      password: password,
    },
  });
  console.log("User creado:", user.email);

  console.log("Seeding completado");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(2, "Nombre muy corto"),
  password: z.string().min(8, "Contraseña debe tener al menos 8 caracteres"),
  role: z.enum(["USER", "ADMIN"]),
  age: z
    .number({ error: "La edad debe ser un número" })
    .int("La edad debe ser un número entero")
    .positive("La edad debe ser un número positivo")
    .max(100, "Edad no válida"),
});

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial();

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(2, "Nombre muy corto"),
  role: z.enum(["USER", "ADMIN"]),
  age: z
    .number()
    .int("La edad debe ser un número entero")
    .positive("La edad debe ser un número positivo")
    .min(18, "Debes ser mayor de 18 años")
    .max(120, "Edad no válida"),
});

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial();

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

import { z } from "zod";
export const CreateUserSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
  age: z
    .number("Debe ser un número")
    .int("Debe ser un número entero")
    .min(18, "Debe ser mayor de 18 años"),
  role: z.enum(["USER", "ADMIN"]),
});

export type UserFormData = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial();

export type UpdateUserFormData = z.infer<typeof UpdateUserSchema>;

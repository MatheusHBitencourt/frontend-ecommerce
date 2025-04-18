// ✅ Schemas para cadastro e login com Zod
import {z} from "zod";

export const userRegisterSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(4, "Mínimo de 4 caracteres"),
  address: z.string().min(4, "Endereço obrigatório"),
});

export const loginSchema = z.object({
  email: z.string().email("E-mail obrigatório"),
  password: z.string().min(4, "Senha obrigatória"),
});

export type UserRegisterInput = z.infer<typeof userRegisterSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

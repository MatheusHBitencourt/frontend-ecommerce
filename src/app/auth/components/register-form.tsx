"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema, UserRegisterInput } from "../schemas/user.schema";
import { useRegister } from "../hooks/use-register";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterInput>({
    resolver: zodResolver(userRegisterSchema),
  });

  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = (data: UserRegisterInput) => {
    registerUser(data, {
      onSuccess: () => alert("✅ Cadastro realizado com sucesso"),
      onError: () => alert("❌ Erro ao cadastrar"),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto p-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Enviando..." : "Cadastrar"}
      </Button>
    </form>
  );
}

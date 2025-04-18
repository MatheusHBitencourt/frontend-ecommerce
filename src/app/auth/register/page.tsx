"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {UserRegisterInput, userRegisterSchema} from "../schemas/user.schema";
import {useRegister} from "../hooks/use-register";

export default function RegisterPage() {
  const router = useRouter();
  const {mutate: registerUser} = useRegister();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<UserRegisterInput>({
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit = (data: UserRegisterInput) => {
    registerUser(data, {
      onSuccess: () => {
        alert(
          "✅ Cadastro realizado com sucesso! Você será redirecionado para login."
        );
        router.push("/auth/login");
      },
      onError: () => alert("❌ Erro ao cadastrar"),
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md bg-white p-6 rounded shadow"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" {...register("address")} />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

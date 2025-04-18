"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {zodResolver} from "@hookform/resolvers/zod";
import {useQueryClient} from "@tanstack/react-query";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useLogin} from "../hooks/use-login";
import {LoginInput, loginSchema} from "../schemas/user.schema";
import {useRouter} from "next/navigation";

export default function Page() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const login = useLogin(() => {
    queryClient.invalidateQueries({queryKey: ["current-user"]});
  });

  const onSubmit = (data: LoginInput) => {
    login.mutate(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md bg-white p-6 rounded shadow"
      >
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

        {login.isError && (
          <p className="text-red-500 text-sm">Erro: {login.error.message}</p>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>

        <p className="mt-4 text-center text-sm">
          Ainda não tem cadastro?{" "}
          <Link href="/auth/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </main>
  );
}

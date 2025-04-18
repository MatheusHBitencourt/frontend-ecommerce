import {useQuery} from "@tanstack/react-query";

export type User = {
  id: string;
  email: string;
  name: string;
};

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/auth/me", {
        credentials: "include",
      });

      if (res.status === 401) {
        const refreshRes = await fetch("http://localhost:3000/auth/refresh", {
          credentials: "include",
        });

        if (!refreshRes.ok) {
          throw new Error("Não autenticado");
        }

        const retry = await fetch("http://localhost:3000/auth/me", {
          credentials: "include",
        });

        if (!retry.ok) {
          throw new Error("Não autenticado mesmo após refresh");
        }

        return retry.json();
      }

      if (!res.ok) {
        throw new Error("Erro ao buscar usuário");
      }

      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}

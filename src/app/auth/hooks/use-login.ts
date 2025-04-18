"use client";

import {useMutation} from "@tanstack/react-query";
import {LoginInput} from "../schemas/user.schema";

const baseUrl = "http://localhost:3000/auth/login";

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function useLogin(onSuccess: () => void) {
  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const hashedPassword = await sha256(data.password);
      const res = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email: data.email, password: hashedPassword}),
      });

      if (!res.ok) throw new Error("Erro ao logar");
      return res.json();
    },
    onSuccess,
  });
}

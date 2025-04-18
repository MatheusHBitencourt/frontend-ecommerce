"use client";

import {useMutation} from "@tanstack/react-query";
import {UserRegisterInput} from "../schemas/user.schema";

const baseUrl = "http://localhost:3000/auth/register";

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function useRegister() {
  return useMutation({
    mutationFn: async (data: UserRegisterInput) => {
      const hashedPassword = await sha256(data.password);
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...data, password: hashedPassword}),
      });

      if (!res.ok) throw new Error("Erro ao cadastrar");
      return res.json();
    },
  });
}

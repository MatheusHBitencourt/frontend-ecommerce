"use client";

import type {Metadata} from "next";
import Link from "next/link";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../lib/queryClient";
import {Toaster} from "@/components/ui/sonner";
import {GlobalProvider, useGlobal} from "./global.context";
import {useEffect} from "react";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function AppLayout({children}: {children: React.ReactNode}) {
  const {user, isUserReady} = useGlobal();

  useEffect(() => {
    if (!isUserReady) return;
  }, [isUserReady]);

  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-gray-800">
            Waving-Test E‑Commerce
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shopping-cart">Cart</Link>
            </li>
            {isUserReady && user?.isAdmin && (
              <li>
                <Link href="/admin">Gerenciar</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <GlobalProvider>
            <AppLayout>{children}</AppLayout>
          </GlobalProvider>
        </QueryClientProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

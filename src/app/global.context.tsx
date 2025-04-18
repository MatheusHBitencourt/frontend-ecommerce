"use client";

import {createContext, useContext, useState} from "react";
import {useCurrentUser} from "./auth/hooks/use-current-user";

export interface GlobalContextType {
  user: any | null;
  isUserReady: boolean;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({children}: {children: React.ReactNode}) {
  const {data: user, isLoading} = useCurrentUser();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        user,
        isUserReady: !isLoading && !!user,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within GlobalProvider");
  return context;
}

"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  page: string;
  setPage: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState("");

  return (
    <AppContext.Provider value={{ page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

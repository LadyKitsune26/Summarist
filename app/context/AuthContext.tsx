"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = { email: string };

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  guestLogin: () => void;
  logout: () => void;
  showAuthModal: boolean;
  setShowAuthModal: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const login = (email: string, password: string) => {
    // dummy login
    setUser({ email });
    setShowAuthModal(false);
  };

  const guestLogin = () => {
    setUser({ email: "guest@gmail.com" });
    setShowAuthModal(false);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, guestLogin, logout, showAuthModal, setShowAuthModal }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

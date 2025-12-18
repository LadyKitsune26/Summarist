"use client";

import { createContext, useContext, ReactNode, useState } from "react";

interface AuthContextType {
  user: { email: string } | null;
  login: (email: string, password: string) => void;
  guestLogin: () => void;
  logout: () => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const login = (email: string, password: string) => {
    if (email === "guest@gmail.com" && password === "guest123") {
      setUser({ email });
      setShowAuthModal(false);
    } else {
      alert("Invalid credentials");
    }
  };

  const guestLogin = () => {
    setUser({ email: "guest@gmail.com" });
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, guestLogin, logout, showAuthModal, setShowAuthModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
  subscription?: "Basic" | "Premium" | "PremiumPlus";
};

type AuthContextType = {
  user: User | null;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  login: (email: string, password: string) => void;
  guestLogin: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const login = (email: string, password: string) => {
    setUser({ email, subscription: "Basic" });
    setShowAuthModal(false);
  };

  const guestLogin = () => {
    setUser({ email: "guest@gmail.com", subscription: "Basic" });
    setShowAuthModal(false);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, showAuthModal, setShowAuthModal, login, guestLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

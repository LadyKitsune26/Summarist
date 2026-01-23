"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, login, guestLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!showAuthModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full space-y-4">
        <h2 className="text-xl font-semibold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={() => login(email, password)}
          className="w-full bg-gray-900 text-white py-2 rounded"
        >
          Login
        </button>
        <button
          onClick={guestLogin}
          className="w-full bg-gray-700 text-white py-2 rounded"
        >
          Guest Login
        </button>
        <button
          onClick={() => setShowAuthModal(false)}
          className="w-full py-2 border rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout, setShowAuthModal } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Summarist</h1>
      <nav className="flex flex-col gap-3">
        <Link href="/for-you">For You</Link>
        <Link href="/library">Library</Link>
        <Link href="#" className="cursor-not-allowed">Highlights</Link>
        <Link href="#" className="cursor-not-allowed">Search</Link>
        <Link href="/settings">Settings</Link>
        <Link href="#" className="cursor-not-allowed">Help & Support</Link>

        {user ? (
          <button
            onClick={logout}
            className="mt-4 bg-gray-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="mt-4 bg-gray-700 px-4 py-2 rounded"
          >
            Login
          </button>
        )}
      </nav>
    </aside>
  );
}

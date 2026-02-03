"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout, setShowAuthModal } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white text-black border-r border-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Summarist
      </h1>

      <nav className="flex flex-col gap-3 text-sm">
        <Link
          href="/for-you"
          className="hover:text-blue-600 transition"
        >
          For You
        </Link>

        <Link
          href="/library"
          className="hover:text-blue-600 transition"
        >
          Library
        </Link>

        <span className="cursor-not-allowed text-gray-400">
          Highlights
        </span>

        <span className="cursor-not-allowed text-gray-400">
          Search
        </span>

        <Link
          href="/settings"
          className="hover:text-blue-600 transition"
        >
          Settings
        </Link>

        <span className="cursor-not-allowed text-gray-400">
          Help & Support
        </span>

        {user ? (
          <button
            onClick={logout}
            className="mt-6 bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="mt-6 bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Login
          </button>
        )}
      </nav>
    </aside>
  );
}

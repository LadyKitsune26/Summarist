"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { user, logout, setShowAuthModal } = useAuth();

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white border-r z-40 w-64 p-6 flex flex-col gap-6 transform transition-transform ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-900">Summarist</h2>

      <nav className="flex flex-col gap-4 text-gray-800 font-medium">
        <Link href="/for-you">For You</Link>
        <Link href="/library">Library</Link>
        <span className="cursor-not-allowed text-gray-400">Highlights</span>
        <span className="cursor-not-allowed text-gray-400">Search</span>
        <Link href="/settings">Settings</Link>
        <span className="cursor-not-allowed text-gray-400">Help & Support</span>

        {user ? (
          <button
            onClick={logout}
            className="text-left px-4 py-2 bg-gray-900 text-white rounded-md"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="text-left px-4 py-2 bg-gray-900 text-white rounded-md"
          >
            Login
          </button>
        )}
      </nav>

      <button
        className="md:hidden fixed top-6 left-4 bg-gray-900 text-white px-3 py-2 rounded-md"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, logout, setShowAuthModal, guestLogin } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Summarist
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/for-you">For You</Link>
          <Link href="/library">Library</Link>

          {user ? (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
              >
                Login
              </button>
              <button
                onClick={guestLogin}
                className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600"
              >
                Guest Login
              </button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-3 text-gray-700 font-medium">
          <Link href="/for-you" onClick={() => setMobileOpen(false)}>
            For You
          </Link>
          <Link href="/library" onClick={() => setMobileOpen(false)}>
            Library
          </Link>

          {user ? (
            <button
              onClick={() => {
                logout();
                setMobileOpen(false);
              }}
              className="px-4 py-2 rounded-md bg-gray-900 text-white text-left"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setMobileOpen(false);
                }}
                className="px-4 py-2 rounded-md bg-gray-900 text-white text-left"
              >
                Login
              </button>
              <button
                onClick={() => {
                  guestLogin();
                  setMobileOpen(false);
                }}
                className="px-4 py-2 rounded-md bg-gray-700 text-white text-left"
              >
                Guest Login
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

"use client";

import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import AuthModal from "../components/AuthModal";

export default function LibraryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-white text-black">
      {/* Sidebar is fixed, so main content needs left margin on md screens */}
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-4 relative">
        {children}

        {/* Auth modal renders here inline */}
        <AuthModal />
      </main>
    </div>
  );
}

"use client";

import { ReactNode } from "react";
import Sidebar from "../../../components/Sidebar";
import AuthModal from "../../../components/AuthModal";

export default function LibraryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-0 md:ml-64 p-4 relative">
        {children}

        {/* Auth modal renders here inline */}
        <AuthModal />
      </main>
    </div>
  );
}

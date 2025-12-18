// app/(app)/layout.tsx
"use client";

import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";
import Nav from "../../components/Nav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <Nav />
        <main className="pt-20 px-6">{children}</main>
      </div>
    </div>
  );
}

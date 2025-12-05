"use client";

import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 p-4">{children}</main>
    </div>
  );
}

// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64 p-6 space-y-6">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}


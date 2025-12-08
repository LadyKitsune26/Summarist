// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Summarist",
  description: "Summaries for busy people",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 font-sans min-h-screen">
        <AuthProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64 p-6">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}


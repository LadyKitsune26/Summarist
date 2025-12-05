import "./globals.css";
import { ReactNode } from "react";
import Nav from "./components/Nav";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Summarist",
  description: "Summaries for busy people",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-700 antialiased">
        <AuthProvider>
          <Nav />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}


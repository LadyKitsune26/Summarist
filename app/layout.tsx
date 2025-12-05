// app/layout.tsx
import "../app/globals.css";
import React from "react";

export const metadata = {
  title: "Summarist",
  description: "Summaries for busy people",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-700">
        {/* main container so pages have consistent padding from screen edges */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

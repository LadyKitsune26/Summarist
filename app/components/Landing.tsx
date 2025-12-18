// app/components/Landing.tsx
"use client";

import Nav from "./Nav";

interface LandingProps {
  onPrimaryClick: () => void;
}

export default function Landing({ onPrimaryClick }: LandingProps) {
  return (
    <>
      {/* NAV BAR */}
      <Nav />

      {/* HERO */}
      <section className="pt-32 pb-24 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Summarist
        </h1>

        <p className="text-slate-300 max-w-xl mx-auto text-lg">
          Summaries for busy people. Read or listen to key insights from top books in minutes.
        </p>

        <button
          onClick={onPrimaryClick}
          className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
        >
          Get Started
        </button>
      </section>
    </>
  );
}

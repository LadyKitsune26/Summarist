"use client";

interface LandingProps {
  onPrimaryClick: () => void;
}

export default function Landing({ onPrimaryClick }: LandingProps) {
  return (
    <div className="bg-white text-black text-center py-20 space-y-6 min-h-screen">
      <img
        src="/logo.png"
        alt="Summarist Hero"
        className="mx-auto w-full max-w-xl"
      />

      <h1 className="text-4xl font-bold text-black">
        Summarist
      </h1>

      <p className="text-gray-700 max-w-xl mx-auto">
        Summaries for busy people. Read or listen to key insights from top books in minutes.
      </p>

      <button
        onClick={onPrimaryClick}
        className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}

"use client";

interface LandingProps {
  onPrimaryClick: () => void;
}

export default function Landing({ onPrimaryClick }: LandingProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 fade-in">
      {/* Text */}
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Gain more knowledge <br className="hidden md:inline" /> in less time
        </h1>
        <p className="text-slate-600 text-lg md:text-xl">
          Great summaries for busy people, <br className="hidden md:inline" />
          individuals who barely have time to read, <br className="hidden md:inline" />
          and even people who don’t like to read.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
          onClick={onPrimaryClick}
        >
          Login
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 hidden lg:flex justify-end">
        <img src="/landing.png" alt="Landing" className="max-w-md w-full h-auto" />
      </div>
    </div>
  );
}


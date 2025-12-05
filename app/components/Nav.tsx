"use client";

interface NavProps {
  onLogin: () => void;
}

export default function Nav({ onLogin }: NavProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 fade-in">
      <div className="container-max mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="w-32">
          <img src="/logo.png" alt="Summarist Logo" className="w-full h-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-slate-700 font-medium">
          <li className="cursor-pointer hover:text-green-500" onClick={onLogin}>
            Login
          </li>
          <li className="hidden md:block cursor-pointer hover:text-green-500">About</li>
          <li className="hidden md:block cursor-pointer hover:text-green-500">Contact</li>
          <li className="hidden md:block cursor-pointer hover:text-green-500">Help</li>
        </ul>
      </div>
    </nav>
  );
}


"use client";

import Landing from "./components/Landing";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext";

export default function HomePage() {
  const { setShowAuthModal } = useAuth();

  return (
    <div className="bg-gray-50 text-gray-900">
      <main className="pt-24 space-y-24">
        <Landing onPrimaryClick={() => setShowAuthModal(true)} />
        <Features />
        <Statistics />
        <Reviews />
        <Numbers />
      </main>
      <Footer />
    </div>
  );
}

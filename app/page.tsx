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
    <div className="bg-gray-900 text-gray-100 antialiased">
      <main className="space-y-20 pt-24">
        <section className="container-max mx-auto px-4 fade-in">
          <Landing onPrimaryClick={() => setShowAuthModal(true)} />
        </section>
        <section className="container-max mx-auto px-4 fade-in">
          <Features />
        </section>
        <section className="container-max mx-auto px-4 fade-in">
          <Statistics />
        </section>
        <section className="container-max mx-auto px-4 fade-in">
          <Reviews />
        </section>
        <section className="container-max mx-auto px-4 fade-in">
          <Numbers />
        </section>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";

export default function HomePage() {
  const handleLogin = () => {
    alert("Open auth modal (placeholder)");
  };

  return (
    <div className="bg-white text-slate-700 antialiased">
      <Nav onLogin={handleLogin} />

      <main className="space-y-20">
        {/* Landing Section */}
        <section className="container-max mx-auto px-4 fade-in">
          <Landing onPrimaryClick={handleLogin} />
        </section>

        {/* Features Section */}
        <section className="container-max mx-auto px-4 fade-in">
          <Features />
        </section>

        {/* Statistics Section */}
        <section className="container-max mx-auto px-4 fade-in">
          <Statistics />
        </section>

        {/* Reviews Section */}
        <section className="container-max mx-auto px-4 fade-in">
          <Reviews />
        </section>

        {/* Numbers Section */}
        <section className="container-max mx-auto px-4 fade-in">
          <Numbers />
        </section>
      </main>

      <Footer />
    </div>
  );
}


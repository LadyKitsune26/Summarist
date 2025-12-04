"use client";

import "../styles/home.css"; // keep original CSS for now

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";

export default function HomePage() {
  const handleLogin = () => {
    // placeholder: later open auth modal
    alert("Open auth modal (placeholder)");
  };

  return (
    <>
      <Nav onLogin={handleLogin} />
      <main>
        <Landing onPrimaryClick={handleLogin} />
        <Features />
        <Statistics />
        <Reviews />
        <Numbers />
      </main>
      <Footer />
    </>
  );
}

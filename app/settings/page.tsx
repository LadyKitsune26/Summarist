"use client";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

export default function SettingsPage() {
  const { user, setShowAuthModal } = useAuth();

  if (!user) {
    setShowAuthModal(true);
    return null;
  }

  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <p>Email: {user.email}</p>
        <p>Subscription: Basic</p>
      </main>
    </div>
  );
}

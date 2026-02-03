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
    <div className="flex bg-white text-black min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-0 md:ml-64 p-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Subscription:</span> Basic
          </p>
        </div>
      </main>
    </div>
  );
}

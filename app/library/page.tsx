"use client";

import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import SkeletonCard from "../components/SkeletonCard";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
};

export default function LibraryPage() {
  const { user, setShowAuthModal } = useAuth();
  const [library, setLibrary] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setLoading(true);

    // Load from localStorage (the only actual storage your User type supports)
    const storedBooks = localStorage.getItem("library");
    const parsed = storedBooks ? JSON.parse(storedBooks) : [];

    setLibrary(Array.isArray(parsed) ? parsed : []);
    setLoading(false);
  }, [user, setShowAuthModal]);

  if (!user) return null;

  return (
    <div className="flex pt-20">
      <Sidebar />

      <main className="flex-1 container-max mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">My Library</h1>

        {loading ? (
          <SkeletonCard />
        ) : library.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {library.map((book: Book) => (
              <div
                key={book.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
              >
                <img
                  src={book.imageLink}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No books in your library.</p>
        )}
      </main>
    </div>
  );
}

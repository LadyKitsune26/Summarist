"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SkeletonCard from "../components/SkeletonCard";
import { useAuth } from "../context/AuthContext";

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
    if (!user) return;
    setLoading(true);
    const storedBooks = localStorage.getItem("library");
    if (storedBooks) setLibrary(JSON.parse(storedBooks));
    setLoading(false);
  }, [user]);

  if (!user)
    return (
      <div className="flex justify-center pt-20 text-black bg-white min-h-screen">
        Please log in to view your library.
      </div>
    );

  const handleClick = (book: Book) => {
    window.location.href = `/player/${book.id}`;
  };

  const renderCard = (book: Book) => (
    <div
      key={book.id}
      className="cursor-pointer overflow-hidden rounded-lg bg-white border shadow hover:shadow-lg transition-shadow"
      onClick={() => handleClick(book)}
    >
      <img
        src={book.imageLink}
        alt={book.title}
        className="w-full h-48 object-contain mt-2" // top margin so image is not flush with border
      />
      <div className="p-4">
        <h3 className="font-semibold text-black">{book.title}</h3>
        <p className="text-sm text-gray-700">{book.author}</p>
      </div>
    </div>
  );

  return (
    <div className="flex pt-20 bg-white text-black min-h-screen">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8 space-y-8">
        <h1 className="text-2xl font-bold text-black mb-4">My Library</h1>
        {loading ? (
          <SkeletonCard />
        ) : library.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {library.map(renderCard)}
          </div>
        ) : (
          <p className="text-gray-700">No books in your library.</p>
        )}
      </main>
    </div>
  );
}

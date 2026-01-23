"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import SkeletonCard from "../../components/SkeletonCard";
import BookCard from "../../components/BookCard";
import { useAuth } from "../../context/AuthContext";

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

  if (!user) return <div className="flex justify-center pt-20 text-gray-100">Please log in to view your library.</div>;

  const handleClick = (book: Book) => {
    window.location.href = `/player/${book.id}`;
  };

  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-100 mb-4">My Library</h1>
        {loading ? (
          <SkeletonCard />
        ) : library.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {library.map((book) => (
              <BookCard key={book.id} book={book} onClick={handleClick} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No books in your library.</p>
        )}
      </main>
    </div>
  );
}

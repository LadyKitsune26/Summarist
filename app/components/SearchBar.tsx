"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subscriptionRequired: boolean;
};

export default function SearchBar() {
  const { user, setShowAuthModal } = useAuth();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const handler = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`
        );
        setResults(await res.json());
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const handleClick = (book: Book) => {
    if (!user) return setShowAuthModal(true);
    if (book.subscriptionRequired && user.email !== "guest@gmail.com")
      return (window.location.href = "/choose-plan");
    window.location.href = `/book/${book.id}`;
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or author..."
        className="w-full border rounded p-2"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border p-2 rounded h-48 animate-pulse bg-gray-200"
                />
              ))
          : results.map((book) => (
              <div
                key={book.id}
                className="border p-2 rounded cursor-pointer"
                onClick={() => handleClick(book)}
              >
                <img
                  src={book.imageLink}
                  alt={book.title}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-1">{book.title}</h3>
                <p className="text-gray-700 text-sm">{book.author}</p>
                {book.subscriptionRequired && (
                  <span className="bg-yellow-400 px-2 py-1 rounded text-xs">
                    Premium
                  </span>
                )}
              </div>
            ))}
      </div>
      {!loading && results.length === 0 && query.trim() && (
        <p>No results found</p>
      )}
    </div>
  );
}

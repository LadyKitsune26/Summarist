// src/components/SearchBar.tsx
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";

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

    const handler = setTimeout(() => {
      setLoading(true);
      fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`)
        .then(res => res.json())
        .then(setResults)
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const handleClick = (book: Book) => {
    if (!user) return setShowAuthModal(true); // open auth modal if not logged in
    const userSubscription = user.subscription ?? "Basic";
    if (book.subscriptionRequired && userSubscription !== "Premium") {
      return window.location.href = "/choose-plan";
    }
    window.location.href = `/book/${book.id}`;
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8 space-y-4">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by title or author..."
          className="w-full border rounded p-2"
        />

        {loading && <p className="text-gray-500">Loading...</p>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map(book => (
            <div
              key={book.id}
              className="border p-2 rounded cursor-pointer hover:shadow-md transition"
              onClick={() => handleClick(book)}
            >
              <img
                src={book.imageLink}
                alt={book.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
              <p className="text-gray-700 text-sm">{book.author}</p>
              {book.subscriptionRequired && (
                <span className="bg-yellow-400 px-2 py-1 rounded text-xs mt-1 inline-block">
                  Premium
                </span>
              )}
            </div>
          ))}
        </div>

        {!loading && results.length === 0 && query.trim() && (
          <p className="text-gray-500">No results found</p>
        )}
      </main>
    </div>
  );
}

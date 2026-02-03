"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  imageLink: string;
  subscriptionRequired?: boolean;
};

async function getBook(id: string): Promise<Book | null> {
  try {
    const res = await fetch(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return { ...data, summary: data.summary ?? "" };
  } catch {
    return null;
  }
}

export default function BookPage({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  // Load book on client
  useEffect(() => {
    async function fetchBook() {
      const data = await getBook(params.id);
      setBook(data);

      if (data) {
        const stored = localStorage.getItem("library");
        const library = stored ? (JSON.parse(stored) as Book[]) : [];
        setAdded(library.some((b) => b.id === data.id));
      }

      setLoading(false);
    }

    fetchBook();
  }, [params.id]);

  const handleAddToLibrary = () => {
    if (!book) return;

    const stored = localStorage.getItem("library");
    const library = stored ? (JSON.parse(stored) as Book[]) : [];

    if (!library.some((b) => b.id === book.id)) {
      library.push(book);
      localStorage.setItem("library", JSON.stringify(library));
      setAdded(true);
      alert(`"${book.title}" added to your library!`);
    }
  };

  if (loading) return <div className="pt-32 text-center text-gray-500">Loading...</div>;
  if (!book) return <div className="pt-32 text-center text-gray-500 text-lg">No book found</div>;

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto bg-white text-black">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Book cover */}
        <div className="shrink-0 mt-4">
          <Image
            src={book.imageLink}
            alt={book.title}
            width={240}
            height={360}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold leading-tight text-black">{book.title}</h1>
            <h2 className="text-lg font-medium text-gray-600">by {book.author}</h2>

            {book.subscriptionRequired && (
              <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-yellow-200 text-yellow-900 rounded-full">
                Premium
              </span>
            )}
          </div>

          <div className="mt-6">
            <p className="whitespace-pre-line text-gray-800 text-base leading-relaxed">
              {book.summary}
            </p>
          </div>

          {/* Add to Library Button */}
          <button
            onClick={handleAddToLibrary}
            disabled={added}
            className={`mt-6 px-6 py-2 rounded-lg font-semibold transition ${
              added
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {added ? "Added to Library" : "Add to Library"}
          </button>
        </div>
      </div>
    </div>
  );
}

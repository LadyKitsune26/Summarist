"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../../../components/Sidebar";
import { useAuth } from "../../../../context/AuthContext";
import SkeletonCard from "../../../../components/SkeletonCard";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  imageLink: string;
};

export default function BookPage() {
  const { user, setShowAuthModal } = useAuth();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const params = new URLSearchParams(window.location.pathname);
  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    const fetchBook = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        ).then((r) => r.json());
        setBook(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id, user, setShowAuthModal]);

  const saveBook = () => {
    if (!book) return;
    const stored = JSON.parse(localStorage.getItem("library") || "[]");
    localStorage.setItem("library", JSON.stringify([...stored, book]));
    alert("Book saved to library!");
  };

  if (!user) return null;

  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8">
        {loading ? (
          <SkeletonCard />
        ) : book ? (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-sm text-gray-600">{book.author}</p>
            <img
              src={book.imageLink}
              alt={book.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="text-slate-700 whitespace-pre-line">{book.summary}</div>
            <button
              onClick={saveBook}
              className="bg-gray-900 text-white py-2 px-4 rounded mt-4"
            >
              Save Book
            </button>
          </div>
        ) : (
          <p>Book not found.</p>
        )}
      </main>
    </div>
  );
}

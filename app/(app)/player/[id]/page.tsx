"use client";

import { useEffect, useState, useRef } from "react";
import Sidebar from "../../../components/Sidebar";
import SkeletonCard from "../../../components/SkeletonCard";
import { useAuth } from "../../../context/AuthContext";
import { useParams } from "next/navigation";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  audioLink?: string;
};

export default function PlayerPage() {
  const params = useParams();
  const id = params.id;
  const { user, setShowAuthModal } = useAuth();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch(() => setBook(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (!user) return <div className="flex justify-center pt-20 text-gray-100">Please log in to play this book.</div>;

  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8">
        {loading ? (
          <SkeletonCard />
        ) : book ? (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-100">{book.title}</h1>
            <p className="text-sm text-gray-400">{book.author}</p>
            <div className="text-gray-200 whitespace-pre-line">{book.summary}</div>
            {book.audioLink && (
              <audio ref={audioRef} controls className="w-full mt-4" src={book.audioLink} />
            )}
          </div>
        ) : (
          <p className="text-gray-400">Book not found.</p>
        )}
      </main>
    </div>
  );
}

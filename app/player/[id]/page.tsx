"use client";

import { useEffect, useState, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import SkeletonCard from "../../components/SkeletonCard";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "next/navigation";

export default function PlayerPage() {
  const params = useParams();
  const id = params.id;
  const { user, setShowAuthModal } = useAuth();
  const [book, setBook] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
            <div className="text-slate-700 whitespace-pre-line">{book.summary}</div>
            {book.audioLink && (
              <audio ref={audioRef} controls className="w-full mt-4" src={book.audioLink} />
            )}
          </div>
        ) : (
          <p>Book not found.</p>
        )}
      </main>
    </div>
  );
}

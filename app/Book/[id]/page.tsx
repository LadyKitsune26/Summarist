"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import SkeletonCard from "../../components/SkeletonCard";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "next/navigation";

export default function BookPage() {
  const params = useParams();
  const id = params.id;
  const { user, setShowAuthModal } = useAuth();
  const [book, setBook] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
      .then(r => r.json())
      .then(b => { setBook(b); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  const handleRead = () => {
    if (!user) return setShowAuthModal(true);
    if (book.subscriptionRequired && user.email !== "guest@gmail.com") {
      window.location.href = "/choose-plan";
    } else {
      window.location.href = `/player/${book.id}`;
    }
  };

  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8">
        {loading ? <SkeletonCard /> : book ? (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-sm text-gray-600">{book.author}</p>
            <div className="text-slate-700 whitespace-pre-line">{book.summary}</div>
            <button
              onClick={handleRead}
              className="px-4 py-2 bg-gray-900 text-white rounded"
            >
              Read / Listen
            </button>
          </div>
        ) : <p>Book not found.</p>}
      </main>
    </div>
  );
}

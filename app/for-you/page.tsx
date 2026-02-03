"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import SkeletonCard from "../components/SkeletonCard";
import { useAuth } from "../context/AuthContext";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  imageLink: string;
  subscriptionRequired?: boolean;
};

export default function ForYouPage() {
  const { user, setShowAuthModal } = useAuth();
  const router = useRouter();

  const [selected, setSelected] = useState<Book | null>(null);
  const [recommended, setRecommended] = useState<Book[]>([]);
  const [suggested, setSuggested] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const selectedRes = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        const selectedData = await selectedRes.json();
        setSelected({ ...selectedData, summary: selectedData.summary ?? "" });

        const recRes = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
        );
        const recData = await recRes.json();
        setRecommended(
          recData.map((b: any) => ({ ...b, summary: b.summary ?? "" }))
        );

        const sugRes = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
        );
        const sugData = await sugRes.json();
        setSuggested(
          sugData.map((b: any) => ({ ...b, summary: b.summary ?? "" }))
        );
      } catch (error) {
        console.error("Error loading books", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (book: Book) => {
    if (!user) return setShowAuthModal(true);
    if (book.subscriptionRequired && user.email !== "guest@gmail.com") {
      return router.push("/choose-plan");
    }
    router.push(`/book/${book.id}`);
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
        className="w-full h-48 object-contain mt-2" // top margin added
      />
      <div className="p-4">
        <h3 className="font-semibold text-black">{book.title}</h3>
        <p className="text-sm text-gray-700">{book.author}</p>
        {book.subscriptionRequired && (
          <span className="inline-block mt-2 px-2 py-1 text-xs font-bold bg-yellow-300 text-black rounded">
            Premium
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex pt-20 bg-white text-black min-h-screen">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8 space-y-8">
        <h1 className="text-2xl font-bold">Selected Book</h1>
        {loading ? <SkeletonCard /> : selected && renderCard(selected)}

        <h2 className="text-2xl font-bold">Recommended Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : recommended.map(renderCard)}
        </div>

        <h2 className="text-2xl font-bold">Suggested Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : suggested.map(renderCard)}
        </div>
      </main>
    </div>
  );
}

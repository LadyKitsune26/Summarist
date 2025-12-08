"use client";

import { useEffect, useState } from "react";
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

  const [selected, setSelected] = useState<Book | null>(null);
  const [recommended, setRecommended] = useState<Book[]>([]);
  const [suggested, setSuggested] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        // Selected book
        const selectedRes = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        const selectedData = await selectedRes.json();
        setSelected({
          ...selectedData,
          summary: selectedData.summary ?? "",
        });

        // Recommended books
        const recRes = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
        );
        const recData = await recRes.json();
        setRecommended(
          recData.map((b: any) => ({ ...b, summary: b.summary ?? "" }))
        );

        // Suggested books
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

  const handleClick = (book: Book): void => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (book.subscriptionRequired && user.email !== "guest@gmail.com") {
      window.location.href = "/choose-plan";
      return;
    }
    window.location.href = `/player/${book.id}`;
  };

  const renderCard = (book: Book) => (
    <div
      key={book.id}
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
      onClick={() => handleClick(book)}
    >
      <img
        src={book.imageLink}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        {book.subscriptionRequired && (
          <span className="inline-block mt-2 px-2 py-1 text-xs font-bold bg-yellow-300 rounded">
            Premium
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex pt-20">
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

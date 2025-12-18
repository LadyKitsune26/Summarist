"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "../../../../context/AuthContext";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  imageLink: string;
  subscriptionRequired?: boolean;
};

export default function BookPage() {
  const { user, setShowAuthModal } = useAuth();
  const params = useParams();
  const { id } = params;

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      const data = await res.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  if (!user) {
    setShowAuthModal(true);
    return null;
  }

  if (!book) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <h2 className="text-xl font-semibold text-gray-400">{book.author}</h2>
      <img src={book.imageLink} alt={book.title} className="my-4 w-full h-64 object-cover rounded" />
      <p className="whitespace-pre-line">{book.summary}</p>
    </div>
  );
}


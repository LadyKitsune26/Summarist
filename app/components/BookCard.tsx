// src/components/BookCard.tsx
"use client";
import Link from "next/link";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subscriptionRequired?: boolean;
};

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/book/${book.id}`}>
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
        {/* Use object-contain instead of object-cover to show full image */}
        <img
          src={book.imageLink}
          alt={book.title}
          className="w-full h-64 object-contain bg-gray-100 p-4"
        />
        {book.subscriptionRequired && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
            Premium
          </span>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold group-hover:text-gray-900">{book.title}</h3>
          <p className="text-gray-500 text-sm">{book.author}</p>
        </div>
      </div>
    </Link>
  );
}

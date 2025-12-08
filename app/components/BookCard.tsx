"use client";

import React from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subscriptionRequired?: boolean;
};

type BookCardProps = {
  book: Book;
  onClick?: (book: Book) => void;
};

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer bg-gray-800 transition transform hover:-translate-y-1"
      onClick={() => onClick && onClick(book)}
    >
      <img
        src={book.imageLink}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-100">{book.title}</h3>
        <p className="text-gray-400 text-sm">{book.author}</p>
        {book.subscriptionRequired && (
          <span className="inline-block mt-2 px-2 py-1 text-xs font-bold bg-yellow-400 rounded">
            Premium
          </span>
        )}
      </div>
    </div>
  );
}

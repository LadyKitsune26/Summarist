import Image from "next/image";
import { notFound } from "next/navigation";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  image: string;
};

const books: Book[] = [
  {
    id: "1",
    title: "The Art of Focus",
    author: "James Clear",
    summary: "A book about clarity, focus, and deep work.",
    image: "/books/book-1.jpg",
  },
  {
    id: "2",
    title: "Deep Thinking",
    author: "Cal Newport",
    summary: "How to reclaim attention in a distracted world.",
    image: "/books/book-2.jpg",
  },
];

export default function BookPage({
  params,
}: {
  params: { id: string };
}) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={book.image}
          alt={book.title}
          width={400}
          height={600}
          className="rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg text-gray-500 mb-6">{book.author}</p>

          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{book.summary}</p>
        </div>
      </div>
    </div>
  );
}

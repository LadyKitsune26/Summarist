import Image from "next/image";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  imageLink: string;
};

async function getBook(id: string): Promise<Book> {
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch book");
  }

  return res.json();
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await params in Next.js 15
  const book = await getBook(id);

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <div className="flex gap-8">
        <Image
          src={book.imageLink}
          alt={book.title}
          width={240}
          height={360}
          className="rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{book.author}</p>
          <p className="leading-relaxed">{book.summary}</p>
        </div>
      </div>
    </div>
  );
}

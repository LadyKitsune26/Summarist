import Image from "next/image";

type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  imageLink: string;
  subscriptionRequired?: boolean;
};

async function getBook(id: string): Promise<Book | null> {
  try {
    const res = await fetch(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return { ...data, summary: data.summary ?? "" };
  } catch {
    return null;
  }
}

export default async function BookPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const book = await getBook(id);

  if (!book) {
    return <div className="pt-24 text-center text-gray-700">No book found</div>;
  }

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={book.imageLink}
          alt={book.title}
          width={240}
          height={360}
          className="rounded shadow"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <h2 className="text-xl text-gray-600">{book.author}</h2>
          <p className="whitespace-pre-line text-gray-800">{book.summary}</p>
          {book.subscriptionRequired && (
            <span className="inline-block px-3 py-1 bg-yellow-300 rounded font-bold">
              Premium
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
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
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await getBook(id);

  if (!book) {
    return (
      <div className="pt-32 text-center text-gray-500 text-lg">
        No book found
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto bg-white text-black">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        
        {/* Book cover */}
        <div className="shrink-0">
          <Image
            src={book.imageLink}
            alt={book.title}
            width={240}
            height={360}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
              {book.title}
            </h1>

            <h2 className="text-lg font-medium text-gray-500">
              by {book.author}
            </h2>

            {book.subscriptionRequired && (
              <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-yellow-200 text-yellow-900 rounded-full">
                Premium
              </span>
            )}
          </div>

          <div className="mt-6">
            <p className="whitespace-pre-line text-gray-800 text-base leading-relaxed">
              {book.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

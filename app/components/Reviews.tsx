// app/components/Reviews.tsx
export default function Reviews() {
  const reviews = [
    { name: "Alice", text: "I love how fast I can read summaries!" },
    { name: "Bob", text: "The audio feature is amazing!" },
    { name: "Charlie", text: "My library is now well organized." },
  ];

  return (
    <div className="space-y-6 py-10">
      <h2 className="text-2xl font-semibold text-center">User Reviews</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="p-4 bg-white border rounded shadow hover:shadow-lg transition">
            <p className="text-gray-700">"{r.text}"</p>
            <p className="mt-2 font-semibold">- {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


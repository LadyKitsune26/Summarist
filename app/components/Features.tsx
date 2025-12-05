// app/components/Features.tsx
export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-10">
      <div className="p-6 bg-white border rounded shadow hover:shadow-lg transition text-center">
        <h3 className="font-semibold text-lg">Save Time</h3>
        <p className="text-gray-600 mt-2">Get key insights from books in minutes.</p>
      </div>
      <div className="p-6 bg-white border rounded shadow hover:shadow-lg transition text-center">
        <h3 className="font-semibold text-lg">Listen or Read</h3>
        <p className="text-gray-600 mt-2">Enjoy summaries in audio or text format.</p>
      </div>
      <div className="p-6 bg-white border rounded shadow hover:shadow-lg transition text-center">
        <h3 className="font-semibold text-lg">Organize</h3>
        <p className="text-gray-600 mt-2">Save your favorite books in your library.</p>
      </div>
    </div>
  );
}


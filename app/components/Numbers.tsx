// app/components/Numbers.tsx
export default function Numbers() {
  return (
    <div className="grid md:grid-cols-4 gap-6 text-center py-10 bg-gray-50 p-6 rounded-lg">
      <div>
        <h3 className="text-2xl font-bold">150+</h3>
        <p className="text-gray-600">Summaries Added</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">200+</h3>
        <p className="text-gray-600">Authors Covered</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">20k+</h3>
        <p className="text-gray-600">Minutes Saved</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">5k+</h3>
        <p className="text-gray-600">Active Users</p>
      </div>
    </div>
  );
}


// app/components/Statistics.tsx
export default function Statistics() {
  return (
    <div className="grid md:grid-cols-3 gap-6 text-center py-10">
      <div>
        <h4 className="text-3xl font-bold">500+</h4>
        <p className="text-gray-600">Books Summarized</p>
      </div>
      <div>
        <h4 className="text-3xl font-bold">10k+</h4>
        <p className="text-gray-600">Happy Readers</p>
      </div>
      <div>
        <h4 className="text-3xl font-bold">50+</h4>
        <p className="text-gray-600">Hours Saved</p>
      </div>
    </div>
  );
}


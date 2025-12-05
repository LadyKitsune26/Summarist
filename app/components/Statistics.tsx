export default function Statistics() {
  const stats = [
    { number: "93%", title: "of Summarist members significantly increase reading frequency." },
    { number: "96%", title: "of Summarist members establish better habits." },
    { number: "90%", title: "have made significant positive change to their lives." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
      {stats.map((stat, idx) => (
        <div key={idx} className="p-6 bg-gray-50 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-500">{stat.number}</div>
          <div className="mt-2 text-slate-700">{stat.title}</div>
        </div>
      ))}
    </div>
  );
}


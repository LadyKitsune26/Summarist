import { BsStarFill } from "react-icons/bs";

const reviews = [
  { name: "Hanna M.", text: "This app has been a game-changer for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers." },
  { name: "David B.", text: "I love this app! It provides concise and accurate summaries of books in a way that is easy to understand. It's also very user-friendly and intuitive." },
  { name: "Nathan S.", text: "This app is a great way to get the main takeaways from a book without having to read the entire thing. The summaries are well-written and informative." },
  { name: "Ryan R.", text: "If you're a busy person who loves reading but doesn't have the time to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content." },
];

export default function Reviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
      {reviews.map((review, idx) => (
        <div key={idx} className="p-4 bg-yellow-50 rounded-lg space-y-2">
          <div className="flex items-center gap-2 font-semibold text-gray-900">
            {review.name}
            <BsStarFill className="text-green-500" />
          </div>
          <p className="text-slate-700">{review.text}</p>
        </div>
      ))}
    </div>
  );
}


import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

const numbers = [
  { icon: <BiCrown className="w-12 h-12 text-green-500" />, title: "3 Million", subtitle: "Downloads on all platforms" },
  { icon: <div className="flex gap-1"><BsStarFill className="text-green-500" /><BsStarHalf className="text-green-500" /></div>, title: "4.5 Stars", subtitle: "Average ratings on iOS and Google Play" },
  { icon: <RiLeafLine className="w-12 h-12 text-green-500" />, title: "97%", subtitle: "Of Summarist members create a better reading habit" },
];

export default function Numbers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
      {numbers.map((num, idx) => (
        <div key={idx} className="p-6 bg-blue-50 rounded-lg text-center space-y-2">
          <div>{num.icon}</div>
          <div className="text-3xl font-bold text-gray-900">{num.title}</div>
          <div className="text-slate-700">{num.subtitle}</div>
        </div>
      ))}
    </div>
  );
}


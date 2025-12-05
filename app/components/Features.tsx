import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";

export default function Features() {
  const features = [
    {
      icon: <AiFillFileText className="w-12 h-12 text-green-500" />,
      title: "Read or listen",
      subtitle: "Save time by getting the core ideas from the best books.",
    },
    {
      icon: <AiFillBulb className="w-12 h-12 text-green-500" />,
      title: "Find your next read",
      subtitle: "Explore book lists and personalized recommendations.",
    },
    {
      icon: <AiFillAudio className="w-12 h-12 text-green-500" />,
      title: "Briefcasts",
      subtitle: "Gain valuable insights from briefcasts.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4">
          {feature.icon}
          <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
          <p className="text-slate-600">{feature.subtitle}</p>
        </div>
      ))}
    </div>
  );
}


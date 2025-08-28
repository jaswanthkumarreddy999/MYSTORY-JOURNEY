import React from "react";
import { GraduationCap, Book, Notebook } from "lucide-react"; // icons

const Trust = () => {
  const items = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Guidance",
      desc: "Step-by-step support to help you master coding efficiently"
    }
    ,
    {
      icon: <Notebook className="w-8 h-8 text-white" />,
      title: "Training Courses",
      desc: "Curated courses to accelerate your programming journey"
    }
,    
    {
      icon: <Book className="w-8 h-8 text-white" />,
      title: "Support Anytime",
      desc: "Round-the-clock support for uninterrupted learning"
    }
    
  ];

  return (
    <div className="bg-gray-50 py-16">
      <h1 className="text-center mb-12">
        <span className="text-4xl font-medium text-gray-800 ">
        Our Highlights
        </span>
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8"
          >
            {/* Icon circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {/* Line under title */}
            <div className="w-12 h-1 bg-gray-700  mb-4 rounded"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;

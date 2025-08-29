import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { GraduationCap, Notebook, MessageCircle } from "lucide-react";

const Trust = () => {
  const items = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Guidance",
      desc: "Step-by-step support to help you master coding efficiently",
    },
    {
      icon: <Notebook className="w-8 h-8 text-white" />,
      title: "Training Courses",
      desc: "Curated courses to accelerate your programming journey",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Support Anytime",
      desc: "Round-the-clock support for uninterrupted learning",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,   
      mirror: true,  
    });
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      {/* Section Title */}
      <h1
        className="text-center mb-12 text-4xl font-medium text-gray-800"
        data-aos="fade-down"
      >
        Our Highlights
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 group"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 mb-6 transform transition-transform duration-500 group-hover:rotate-180">
              {item.icon}
            </div>

            {/* Card Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {/* Line under title */}
            <div className="w-12 h-1 bg-gray-700 mb-4 rounded" />

            {/* Description */}
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;

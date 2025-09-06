import React, { useEffect } from "react";
import { Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "This platform helped me a lot in my DSA journey. The structured roadmaps made my preparation clear and goal-oriented.",
    name: "Gloria Jessica",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I really liked the placement sheets. They cover everything from basics to advanced and gave me confidence in interviews.",
    name: "Alias Jhone",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The resources and guidance provided here are top-notch. It feels like having a mentor with me all the time.",
    name: "Michael Lee",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        What Learners Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="relative" data-aos="zoom-in">
            <div className="bg-white p-6 rounded-2xl shadow-md relative">
              <Quote className="text-pink-500 w-6 h-6 mb-2" />
              <p className="text-gray-600">{t.text}</p>
              <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full"
              />
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

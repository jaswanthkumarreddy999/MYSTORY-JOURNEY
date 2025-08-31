import React from "react";
import RoadMapCard from "../components/RoadMapCard";
import RoadMapHeroSection from "../components/RoadMapHeroSection";

// Dummy Data
const roadmapData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Learn HTML, CSS, and JavaScript for building web pages. Explore React, responsive design, and modern UI practices. Create interactive and visually stunning websites.",
    image:
      "https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2031,%202025%20at%2010_44_36%20AM.png",
    rating: 4,
    views: "2.3k",
    modalImage:
      "https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2031,%202025,%2011_50_05%20AM.png",
    faqs: [
      { q: "What will I learn?", a: "You’ll learn HTML, CSS, JS, React step by step." },
      { q: "Is this beginner-friendly?", a: "Yes, perfect for beginners." },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Master Node.js and Express for server-side apps. Work with databases and APIs to manage data effectively. Build secure, scalable, and production-ready projects.",
    image:
      "https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2031,%202025,%2011_09_13%20AM.png",
    rating: 5,
    views: "1.8k",
    modalImage:
      "https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2031,%202025,%2011_52_20%20AM.png",
    faqs: [
      { q: "Do I need prior experience?", a: "Some JS knowledge is helpful but not required." },
      { q: "Will I build projects?", a: "Yes! Real-world backend projects included." },
    ],
  },
  {
    id: 3,
    title: "New to Programming?",
    description:
      "Start with the basics of coding and problem-solving. Understand core programming concepts step by step. Build a solid foundation before moving into advanced topics.",
    image:
      "https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2031,%202025,%2011_13_34%20AM.png",
    rating: 5,
    views: "3.1k",
    modalImage:
      "https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2031,%202025,%2011_55_00%20AM.png",
    faqs: [
      { q: "What language should I start with?", a: "Python or JS are great first languages." },
      { q: "How long will it take?", a: "Depends on practice, usually a few weeks to basics." },
    ],
  },
];



const Roadmaps = () => {
  return (
    <>
    <RoadMapHeroSection />
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Your Next Move
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        We guide you with clear directions at every step, helping you move forward with confidence.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {roadmapData.map((roadmap) => (
          <RoadMapCard key={roadmap.id} {...roadmap} />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Roadmaps;

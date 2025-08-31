import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RoadMapHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative h-[340px] w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white flex items-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>

        {/* Content */}
        <div className="relative max-w-3xl px-8 z-10" data-aos="fade-right">
          <h1 className="text-4xl font-extrabold mb-4">ROADMAPS</h1>
          <p className="text-md text-gray-300 leading-relaxed">
            Roadmaps are your path to success. Step by step, with consistency and
            hard work, you’ll turn vision into achievement.
          </p>
        </div>
      </div>
    </>
    

  );
};

export default RoadMapHeroSection;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      easing: "ease-in-out",
      once: true,       // animation happens only once
    });
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-20 bg-gray-50 h-[600px]">
      {/* Left Side Content */}
      <div
        data-aos="fade-right"
        className="w-full md:w-1/2 max-w-lg text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Join <span className="text-amber-400 text-4xl sm:text-5xl">DSA!</span>
        </h1>
        <p className="mt-4 sm:mt-5 text-gray-700 text-base sm:text-lg">
          Master DSA with our platform. From beginner to pro, get the resources
          and support you need. Start your coding journey today!
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          {/* Get Started Button */}
          <button className="relative px-6 py-3 text-[16px] font-medium rounded-lg border text-black overflow-hidden group">
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              Get Started
            </span>
          </button>

          {/* Subscribe Button */}
          <a
            href="https://www.youtube.com/@MYSTORY_JOURNEY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors duration-300"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div
        data-aos="fade-left"
        className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center"
      >
        <img
          src="https://ik.imagekit.io/jezimf2jod/pexels-olia-danilevich-4974916.jpg"
          alt="Code learning"
          className="rounded-2xl shadow-xl w-full max-w-md md:max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;

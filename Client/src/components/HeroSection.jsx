import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between px-16 py-20 bg-gray-50 h-[650px]">
      {/* Left Side Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl font-extrabold leading-tight">
          Welcome to MSJourneyX
        </h1>
        <p className="mt-4 text-medium text-gray-700">
        Dream big, take the first step, and we’ll walk with you. We’re students just like you, aiming high, learning together, and building our future.

Join us, explore your potential, and let’s achieve great things — together!
        </p>
        <div className="mt-6 flex gap-4 items-center">
  {/* Get Started Button */}
  <button className="relative px-6 py-3 text-[16px] font-medium rounded-lg border text-black overflow-hidden group">
    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
    <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
      Get Started
    </span>
  </button>

  {/* Subscribe Button (link to YouTube) */}
  <a
    href="https://www.youtube.com/@MYSTORY_JOURNEY"
    target="_blank"
    rel="noopener noreferrer"
    className="text-center bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors duration-300"
  >
    Subscribe
  </a>
      </div>


       
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-1/2"
      >
        <img
          src="https://ik.imagekit.io/jezimf2jod/pexels-olia-danilevich-4974916.jpg"
          alt="Code learning"
          className="rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;

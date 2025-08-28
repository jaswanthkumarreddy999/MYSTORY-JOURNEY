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
          Learn DSA with structured roadmaps, practice sheets, curated resources & more....
        </p>
        <button className="relative mt-6 px-6 py-3 text-[16px] font-medium rounded-lg border text-black overflow-hidden group">
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
            Get Started
          </span>
        </button>
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

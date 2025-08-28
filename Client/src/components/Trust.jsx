import React from "react";
import { GraduationCap, Book, Notebook } from "lucide-react";
import { motion } from "framer-motion";

const Trust = () => {
  const items = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Guidance",
      desc: "Step-by-step support to help you master coding efficiently"
    },
    {
      icon: <Notebook className="w-8 h-8 text-white" />,
      title: "Training Courses", 
      desc: "Curated courses to accelerate your programming journey"
    },
    {
      icon: <Book className="w-8 h-8 text-white" />,
      title: "Support Anytime",
      desc: "Round-the-clock support for uninterrupted learning"
    }
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0
      }
    }
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <motion.h1
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <span className="text-4xl font-medium text-gray-800">
          Our Highlights
        </span>
      </motion.h1>
      
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8"
            variants={cardVariants}
            custom={index % 2 === 0 ? "left" : "right"}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Icon circle */}
            <motion.div
              className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 mb-6"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              {item.icon}
            </motion.div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            
            {/* Line under title */}
            <motion.div
              className="w-12 h-1 bg-gray-700 mb-4 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ 
                delay: 0.5, 
                duration: 0.5 
              }}
              viewport={{ once: true }}
            />
            
            {/* Description */}
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Trust;
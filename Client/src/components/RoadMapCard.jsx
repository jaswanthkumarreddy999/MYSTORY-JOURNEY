import React from "react";
import { motion } from "framer-motion";
import { Star, Eye } from "lucide-react";
import RoadMapReviewModel from "./RoadMapReviewModel";
import { useAuth } from "../context/AuthContext";

const RoadMapCard = ({ title, description, image, rating, views, modalImage, faqs }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, setModelOpen } = useAuth();  

  const handleExplore = () => {
    if (!user) {
      // If not logged in, open login modal
      setModelOpen(true);
      return;
    }
    // If logged in, open roadmap modal
    setIsOpen(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative bg-white rounded-xl shadow-md overflow-hidden group flex flex-col h-full"
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          />

          <button
            onClick={handleExplore}
            className="absolute bottom-3 left-3 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg
              opacity-0 translate-y-3 transition-all duration-500 ease-out
              group-hover:opacity-100 group-hover:translate-y-0"
          >
            Explore
          </button>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h1 className="text-lg font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

          <div className="flex items-center justify-between text-gray-600 text-sm mt-auto">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-1 text-gray-700">{rating}.0</span>
            </div>

            <div className="flex items-center space-x-1">
              <Eye size={18} className="text-indigo-500" />
              <span>{views} views</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Roadmap Modal */}
      <RoadMapReviewModel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        roadmap={{ title, modalImage, faqs }}
      />
    </>
  );
};

export default RoadMapCard;

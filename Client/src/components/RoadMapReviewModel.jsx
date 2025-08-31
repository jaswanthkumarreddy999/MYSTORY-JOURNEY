import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const RoadMapReviewModel = ({ isOpen, onClose, roadmap }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  if (!isOpen || !roadmap) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { roadmap: roadmap.title, rating, feedback });
    resetAndClose();
  };

  const resetAndClose = () => {
    setShowFeedback(false);
    setRating(0);
    setFeedback("");
    onClose();
  };

  // Motion variants for smooth open & close
  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.95 }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={resetAndClose} // click outside
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl w-[90%] max-w-5xl overflow-hidden flex flex-col md:flex-row max-h-[100vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.5
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing modal by clicking inside
          >
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src={roadmap.modalImage}
                alt={roadmap.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col relative">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">{roadmap.title} – FAQs & Feedback</h2>
                <button onClick={resetAndClose}>
                  <X size={24} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* FAQs */}
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
                {roadmap.faqs.map((faq, idx) => (
                  <details key={idx} className="border p-3 rounded-lg">
                    <summary className="cursor-pointer font-medium">{faq.q}</summary>
                    <p className="mt-2 text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>

              {/* Sticky Feedback Button / Form */}
              <div className="p-6 border-t bg-gray-50 sticky bottom-0">
                {!showFeedback ? (
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 w-full md:w-max"
                    onClick={() => setShowFeedback(true)}
                  >
                    Give Feedback
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div>
                      <label className="block mb-2 font-medium">Your Rating:</label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                            onClick={() => setRating(star)}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share your feedback..."
                      className="w-full border rounded-lg p-2"
                      rows="3"
                    />

                    <div className="flex space-x-2">
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
                      >
                        Submit Feedback
                      </button>
                      <button
                        type="button"
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                        onClick={() => setShowFeedback(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoadMapReviewModel;

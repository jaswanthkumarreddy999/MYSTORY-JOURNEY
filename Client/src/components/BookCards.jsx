import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, BookOpen } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const CircularProgress = ({ progress }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-12 h-12">
      <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="white"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
      </div>
    </div>
  );
};

// 🎨 Gradient palette
const gradients = [
  "linear-gradient(to bottom right, #7c3aed, #6d28d9, #3730a3)", // purple → indigo
  "linear-gradient(to bottom right, #2563eb, #1d4ed8, #0e7490)", // blue → cyan
  "linear-gradient(to bottom right, #eab308, #ea580c, #b91c1c)", // yellow → red
  "linear-gradient(to bottom right, #14b8a6, #0891b2, #1d4ed8)", // teal → blue
  "linear-gradient(to bottom right, #16a34a, #047857, #115e59)", // green → teal
  "linear-gradient(to bottom right, #4f46e5, #6d28d9, #9d174d)", // indigo → pink
];

// ✅ Hash book.id → stable gradient
const getGradientForId = (id) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
};

const BookCards = () => {
  const { profile } = useAuth();
  const scrollRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons);
      return () =>
        scrollElement.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  // ✅ Fetch books & assign gradients
  useEffect(() => {
    if (!profile) return;
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/practicebooks/getpracticebooks?userid=68b0fd7706d0d9901abd0c3c`
        );
        const result = await response.json();
        if (result.success) {
          const booksWithGradients = result.data.map((book) => ({
            ...book,
            gradient: getGradientForId(book.id),
          }));
          setBooks(booksWithGradients);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [profile]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 360 + 24; // card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // ✅ Skeleton Card Component
  const SkeletonCard = () => (
    <div className="min-w-[360px] max-w-[360px] flex-shrink-0 rounded-lg shadow-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      <div className="relative z-10 p-8 h-64 flex flex-col">
        <div className="h-4 w-32 bg-white/50 rounded mb-2 animate-pulse" />
        <div className="h-6 w-48 bg-white/50 rounded mb-4 animate-pulse" />
        <div className="mt-auto">
          <div className="h-4 w-24 bg-white/50 rounded mb-2 animate-pulse" />
          <div className="h-4 w-16 bg-white/50 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-8">
      {/* Header */}
      <div className="mb-8 px-4">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-6 h-6 text-gray-700" />
          <h1 className="text-3xl font-bold text-gray-800">Books</h1>
        </div>
        <p className="text-gray-600">Continue your programming journey</p>
      </div>

      {/* Left Button */}
      {canScrollLeft && !loading && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-[58%] -translate-y-1/2 
             bg-white/40 backdrop-blur-md text-gray-800 
             p-3 rounded-full z-20 
             shadow-md hover:shadow-lg hover:bg-white/70 
             transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-12 pb-4"
      >
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : books.map((book) => (
              <div
                key={book.id}
                className="min-w-[360px] max-w-[360px] flex-shrink-0 rounded-lg shadow-md relative overflow-hidden transition-all duration-500"
              >
                {/* ✅ Gradient Background */}
                <div
                  className="absolute inset-0"
                  style={{ background: book.gradient }}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                {/* Content */}
                <div className="relative z-10 p-8 h-64 flex flex-col">
                  <p className="text-sm font-medium text-white/80 mb-2 tracking-wide">
                    {book.subtitle}
                  </p>
                  <h2 className="text-2xl font-bold text-white leading-tight mb-auto">
                    {book.title}
                  </h2>
                  <div className="flex justify-between items-end">
                    <div className="text-white/90">
                      <p className="text-sm font-medium">
                        {book.chapters} Chapters
                      </p>
                      <p className="text-sm font-medium">{book.lessons} Items</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CircularProgress progress={book.progress} />
                      <p className="text-xs font-semibold text-white/90">
                        {book.progress}% Complete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Right Button */}
      {canScrollRight && !loading && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-[58%] -translate-y-1/2 
                  bg-white/40 backdrop-blur-md text-gray-800 
                  p-3 rounded-full z-20 
                  shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/70"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BookCards;

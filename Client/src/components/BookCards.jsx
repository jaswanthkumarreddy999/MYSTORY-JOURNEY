import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, BookOpen } from "lucide-react";

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

const BookCards = () => {
  const scrollRef = useRef(null);
  const [books, setBooks] = useState([]);
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

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/practicebooks/getpracticebooks"
        );
        const result = await response.json();
        if (result.success) {
          setBooks(result.data); // result.data is the array
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 360 + 24; // card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

      {/* Left button */}
      {canScrollLeft && (
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
        {books.map((book) => (
          <div
            key={book.id}
            className="min-w-[360px] max-w-[360px] flex-shrink-0 rounded-lg shadow-md bg-gradient-to-br relative overflow-hidden transition-all duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${book.gradient}`} />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-8 left-4 w-8 h-8 bg-white/20 rounded-full blur-lg" />

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
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full" />
                    <p className="text-sm font-medium">
                      {book.chapters?.length || 0} Chapters
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full" />
                    <p className="text-sm font-medium">{book.lessons} Items</p>
                  </div>
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

      {/* Right button */}
      {canScrollRight && (
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

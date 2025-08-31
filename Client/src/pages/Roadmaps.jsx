import React, { useEffect, useState } from "react";
import RoadMapCard from "../components/RoadMapCard";
import RoadMapHeroSection from "../components/RoadMapHeroSection";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch("http://localhost:8080/roadmap/getroadmaps");
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        // extract the 'data' array from API response
        setRoadmaps(result.data || []);
      } catch (error) {
        console.error("Error fetching roadmap data:", error);
        setRoadmaps([]); // fallback to empty array
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

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
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-4 bg-white rounded-lg shadow-md">
                  <Skeleton height={200} />
                  <Skeleton height={25} className="mt-4" />
                  <Skeleton count={2} className="mt-2" />
                </div>
              ))
            : roadmaps.map((roadmap) => <RoadMapCard key={roadmap.id} {...roadmap} />)}
        </div>
      </div>
    </>
  );
};

export default Roadmaps;

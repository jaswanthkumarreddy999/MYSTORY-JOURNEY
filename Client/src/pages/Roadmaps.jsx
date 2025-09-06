import React, { useEffect, useState } from "react";
import RoadMapCard from "../components/RoadMapCard";
import RoadMapHeroSection from "../components/RoadMapHeroSection";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Testimonial from "../components/Testimonial";
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
        setTimeout(()=>{
          setLoading(false);
        },1000);
      
      }
    };

    fetchRoadmaps();
  }, []);

  return (
    <>
      <RoadMapHeroSection />
      <div className="px-6 py-16">
      <div>
  <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
  Smart Path
  </h2>

  {/* underline */}
  <div className="mx-auto mb-10 h-[3px] w-40 bg-gray-600 rounded animate-grow"></div>
</div>

        

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
      <Testimonial/>
    </>
  );
};

export default Roadmaps;

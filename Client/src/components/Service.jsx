import React from "react";
import { Layers, BookOpen, TrendingUp,Map,FileText,Book  } from "lucide-react";

const Service = () => {
  return (
    <div className="py-16 px-20 bg-white">
  <div className="grid mx-auto md:grid-cols-2 items-start">
    
    {/* Left Side - Text */}
    <div>
      <h4 className="text-orange-500 font-semibold uppercase text-2xl tracking-wide">
        Services
      </h4>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Capabilities</h2>
      <p className="text-gray-500 mt-4 leading-relaxed">
        We bring the strength of our experience and <br /> the depth of our knowledge 
        to guide your journey. With structured guidance <br /> and curated resources, 
        we help you learn, grow, and succeed.
      </p>
    </div>

    {/* Right Side - Capabilities Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      {/* Capability 1 */}
      <div className="flex flex-col items-start p-6 bg-white rounded-md shadow-sm transition">
  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 mb-4">
    <Map className="w-7 h-7 text-blue-500" />
  </div>
  <h3 className="font-semibold text-lg text-gray-900">Roadmaps</h3>
  <p className="text-gray-500 text-sm mt-4">
    Follow a clear step-by-step roadmap to master coding with confidence.
  </p>
</div>


      {/* Capability 2 */}
      <div className="flex flex-col items-start p-6 bg-white rounded-md shadow-md transition">
  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 mb-4">
    <FileText className="w-7 h-7 text-green-500" />
  </div>
  <h3 className="font-semibold text-lg text-gray-900">Practice Sheets</h3>
  <p className="text-gray-500 text-sm mt-4">
    Access well-structured practice sheets to strengthen your concepts and boost confidence.
  </p>
</div>


      {/* Capability 3 */}
      <div className="flex flex-col items-start p-6 bg-white rounded-md shadow-lg transition">
  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 mb-4">
    <Book className="w-7 h-7 text-blue-500" />
  </div>
  <h3 className="font-semibold text-lg text-gray-900">Resources</h3>
  <p className="text-gray-500 text-sm mt-4">
  These resources guided me well throughout my journey and made learning easier.
  </p>
</div>

    </div>
  </div>
</div>

  );
};

export default Service;

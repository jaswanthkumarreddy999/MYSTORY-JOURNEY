import React, { useEffect } from "react";
import { Map, FileText, Book,Smile } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";



const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="py-16 md:px-20 px-12 bg-white">
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
        <div className="grid md:grid-cols-3 gap-6 mt-10 sm:mt-0">
          
          {/* Capability 1 */}
          <div
            className="group relative flex flex-col items-start p-6 bg-white rounded-md shadow-md transition hover:shadow-lg hover:-translate-y-2 duration-500"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 mb-4 transform transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-75">
              <Map className="w-7 h-7 text-blue-500" />
            </div>

            {/* Button */}
            <button className="absolute top-6 left-6 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
              Try Me..
            </button>

            <h3 className="font-semibold text-lg text-gray-900 mt-2">Roadmaps</h3>
            <p className="text-gray-500 text-sm mt-4">
              Follow a clear step-by-step roadmap to master coding with confidence.
            </p>
          </div>

          {/* Capability 2 */}
          <div
            className="group relative flex flex-col items-start p-6 bg-white rounded-md shadow-lg transition hover:shadow-xl hover:-translate-y-2 duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 mb-4 transform transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-75">
              <FileText className="w-7 h-7 text-green-500" />
            </div>

            <button className="absolute top-6 left-6 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
            Let’s Go 
            </button>

            <h3 className="font-semibold text-lg text-gray-900 mt-2">Practice Sheets</h3>
            <p className="text-gray-500 text-sm mt-4">
              Access well-structured practice sheets to strengthen your concepts and boost confidence.
            </p>
          </div>

          {/* Capability 3 */}
          <div
            className="group relative flex flex-col items-start p-6 bg-white rounded-md shadow-xl transition hover:shadow-2xl hover:-translate-y-2 duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-4 transform transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-75">
              <Book className="w-7 h-7 text-pink-500" />
            </div>

            <button className="absolute top-6 left-6 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-pink-500 text-white px-4 py-2 rounded-md shadow-md">
              Explore!
            </button>

            <h3 className="font-semibold text-lg text-gray-900 mt-2">Resources</h3>
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

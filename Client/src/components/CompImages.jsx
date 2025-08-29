import React from "react";
import Marquee from "react-fast-marquee";

const CompImages = () => {
  const logos = [
    "https://ik.imagekit.io/jezimf2jod/Logo.svg",
    "https://ik.imagekit.io/jezimf2jod/Logo%20(2).svg",
    "https://cdn.brandfetch.io/idawOgYOsG/w/694/h/144/theme/dark/idbFwOBh4f.png?c=1dxbfHSJFAPEGdCLU4o5B",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
    "https://ik.imagekit.io/jezimf2jod/Stripe_Logo_0.svg?updatedAt=1756348219767",
    "https://ik.imagekit.io/jezimf2jod/Logo%20(1).png"
  ];

  return (
    <div className="w-full relative bg-white py-10">
      {/* Left Gradient Overlay - Light Gray */}
      <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-gray-200 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right Gradient Overlay - Light Gray */}
      <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-gray-200 to-transparent z-10 pointer-events-none"></div>

      <Marquee pauseOnHover={true} speed={70} gradient={false}>
        {logos.map((src, index) => (
          <div
            key={index}
            className="w-32 h-20 mx-10 flex items-center justify-center md:w-40"
          >
            <img
              src={src}
              alt={`Company${index + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CompImages;

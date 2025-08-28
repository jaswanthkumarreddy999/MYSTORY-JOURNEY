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
    <div className="w-full bg-white py-10">
      <Marquee pauseOnHover={true} speed={70} gradient={false}>
        {logos.map((src, index) => (
          <div
            key={index}
            className="w-40 h-20 mx-10 flex items-center justify-center"
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

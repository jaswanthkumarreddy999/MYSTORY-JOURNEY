import React from "react";

const CompImages = () => {
  return (
    <div className="flex items-center justify-around p-10 gap-6">
      {[
        "https://ik.imagekit.io/jezimf2jod/Logo.svg",
        "https://ik.imagekit.io/jezimf2jod/Logo%20(2).svg",
        "https://cdn.brandfetch.io/idawOgYOsG/w/694/h/144/theme/dark/idbFwOBh4f.png?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
      
      ].map((src, index) => (
        <div
          key={index}
          className="w-40 h-20 flex items-center justify-center flex-shrink-0"
        >
          <img
            src={src}
            alt={`Company${index + 1}`}
            className="max-w-full max-h-full object-contain" // Changed to object-contain for better fit
          />
        </div>
      ))}
    </div>
  );
};

export default CompImages;
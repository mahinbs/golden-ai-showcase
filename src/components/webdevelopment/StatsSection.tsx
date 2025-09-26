import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-black text-white py-32 relative">
      <div className="wrapper">
        {/* Centered Content */}
        <div className="text-center space-y-12">
          {/* Mission Statement */}
          <div>
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-relaxed">
              At <span className="text-[#ffd63c]">Specslo</span>, we build secure, scalable websites
              <br />
              crafted around your <span className="text-[#ffd63c]">specs</span> to drive business growth.
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white max-w-4xl mx-auto"></div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-gray-300 mb-3">70+</div>
              <div className="text-base lg:text-lg text-gray-400">Web Solutions Delivered</div>
            </div>
            <div className="text-center border-l border-r border-gray-600 px-8">
              <div className="text-6xl lg:text-7xl font-bold text-gray-300 mb-3">2x</div>
              <div className="text-base lg:text-lg text-gray-400">Faster Load Times</div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-gray-300 mb-3">60%</div>
              <div className="text-base lg:text-lg text-gray-400">SEO Visibility Boost</div>
            </div>
          </div>
        </div>

        {/* Bottom Right Character Illustration */}
        <div className="absolute bottom-8 right-8">
          <div className="relative max-w-xs">
            <img
              src="https://res.cloudinary.com/dknafpppp/image/upload/v1758908591/Screenshot_2025-09-27_at_12.42.42_AM_pc2e1e.png"
              alt="Character working at computer"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

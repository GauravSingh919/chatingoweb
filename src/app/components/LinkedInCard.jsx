import React from 'react';

const LinkedInCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto px-4">
      {/* Main card container with rounded corners and border */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-sky-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Header section with sky blue background */}
        <div className="bg-sky-400 px-6 py-6 sm:px-8 sm:py-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-black tracking-wide">
            LinkedIn Essentials
          </h2>
        </div>
        
        {/* Content section with light background */}
        <div className="bg-gray-100 px-6 py-12 sm:px-8 sm:py-16 text-center">
          {/* Price section */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <span className="text-base sm:text-lg text-gray-600 font-medium">Starting at</span>
              <span className="text-4xl sm:text-6xl font-bold text-black">₹1500</span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
              /month per active employee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInCard;
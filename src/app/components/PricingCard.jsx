import React from 'react';

const PricingCard = () => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Header Section with Blue Background */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-6 py-6 text-center">
        <h2 className="text-white text-xl font-semibold">
          LinkedIn Essentials
        </h2>
      </div>
      
      {/* Pricing Section */}
      <div className="px-6 py-8 text-center bg-gray-50">
        <div className="mb-2">
          <span className="text-gray-600 text-sm">Starting at</span>
        </div>
        <div className="mb-2">
          <span className="text-4xl font-bold text-gray-900">₹1500</span>
        </div>
        <div className="text-gray-500 text-sm">
          /month per active employee
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
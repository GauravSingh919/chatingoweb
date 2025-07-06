"use client";

import React, { useState, useEffect } from "react";
import Form from "../Form";
import Image from "next/image";
import Thunder from "../../../../public/images/thunderr.png";

const JoinSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Small delay for better effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Join Button */}
      <div className={`fixed bottom-2 lg:bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] rounded-full border border-[#3d3d3d] shadow-lg z-30 transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      }`}>
        <div className="flex items-center px-1 py-1 rounded-full">
          <div className="flex items-center pl-1 max-[415px]:pr-10 pr-3 py-2 rounded-full">
            <Image className="w-8 h-8" src={Thunder} alt="Thunder Icon" />
            <p className="text-white font-thin text-xl">
              Chatin
              <span className="text-[#E4EF31]">go</span>
            </p>
          </div>
          <div className="relative">
            <button
              className="bg-[#00bdb7] text-[#0a0a0a] font-normal px-5 py-3 rounded-full text-base cursor-pointer shadow-xl group"
              onClick={() => setShowForm(true)}
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  Join
                </span>
                <span className="absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                  Join
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Modal Form */}
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
};

export default JoinSection;
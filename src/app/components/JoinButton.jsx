"use client";

import React, { useState } from "react";
import Form from "./Form"; 
import Image from "next/image";
import Thunder from "../../../public/images/thunderr.png";
const JoinSection = () => {
  const [showForm, setShowForm] = useState(false);
  

  return (
    <>
      {/* Floating Join Button */}
      <div className="fixed bottom-2 lg:bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] rounded-full border border-white/60 shadow-lg z-30">
        <div className="flex items-center px-1 py-2 rounded-full">
          <div className="flex items-center px-3 py-2 rounded-full">
            <Image className="w-6 h-6" src={Thunder} alt="Thunder Icon" />
            <span className="text-white font-thin text-xl">Chatingo</span>
          </div>
          <div className="relative">
            <button
              className="bg-[#00bdb7] text-[#0a0a0a] font-normal px-5 py-3 rounded-full text-sm cursor-pointer shadow-xl"
              onClick={() => setShowForm(true)}
            >
              Join
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
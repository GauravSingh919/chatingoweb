"use client";

import React, { useState } from "react";
import Form from "./Form"; // Assuming ModernGlowingForm is default-exported as Form

const JoinSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Floating Join Button */}
      <div className="fixed bottom-2 lg:bottom-10 left-1/2 transform -translate-x-1/2 bg-black rounded-full border border-white/60 shadow-lg z-30">
        <div className="flex items-center px-1 py-1 rounded-full">
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full">
            <div className="w-4 h-4 rounded-sm bg-lime-400 rotate-45"></div>
            <span className="text-white font-semibold text-lg">Chatingo</span>
          </div>
          <div className="relative">
            <button
              className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-full text-sm cursor-pointer shadow-xl"
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

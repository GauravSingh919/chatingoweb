"use client";
import React from "react";

export default function PricingCard() {
  return (
    <div className="w-[300px] rounded-lg border border-black/10 shadow-sm overflow-hidden bg-white">
      <div className="bg-[#92D0F2] h-10 w-full" />
      <div className="p-5 space-y-3">
        <h3 className="text-center text-[#0F172A] font-semibold">LinkedIn Essentials</h3>
        <div className="text-center text-sm text-[#6B7280]">Starting at</div>
        <div className="text-center text-3xl font-bold tracking-wide text-[#0F172A]">
          <span className="align-top text-xl">₹</span>1500
        </div>
        <div className="text-center text-sm text-[#9CA3AF]">/month per active employee</div>
      </div>
    </div>
  );
}


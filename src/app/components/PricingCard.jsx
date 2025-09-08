"use client";
import React from "react";

export default function PricingCard({
  title = "LinkedIn Essentials",
  currency = "₹",
  price = "1500",
  subtitle = "/month per active employee",
  className = "",
}) {
  return (
    <div
      className={`w-[300px] rounded-xl border border-[#D7EAF8] bg-[#F0F8FF] shadow-[0_4px_0_0_#B6D9F4] overflow-hidden ${className}`}
    >
      <div className="bg-[#8ED0F7] px-5 py-4">
        <p className="text-center text-[16px] font-semibold text-[#0A0A0A]">
          {title}
        </p>
      </div>
      <div className="px-5 py-6 space-y-3">
        <p className="text-[#5C6166] text-[14px]">Starting at</p>
        <div className="flex items-baseline gap-1">
          <span className="text-[18px] font-semibold text-[#0A0A0A]">
            {currency}
          </span>
          <span className="text-[32px] leading-none font-extrabold text-[#0A0A0A]">
            {price}
          </span>
        </div>
        <p className="text-[#9AA1A9] text-[12px]">{subtitle}</p>
      </div>
    </div>
  );
}


"use client";

import React from "react";

type PricingCardProps = {
  title?: string;
  priceInRupees?: number;
  subtitle?: string;
};

export default function PricingCard({
  title = "LinkedIn Essentials",
  priceInRupees = 1500,
  subtitle = "/month per active employee",
}: PricingCardProps) {
  return (
    <div className="relative w-[360px] rounded-2xl border border-sky-300 bg-white shadow-md">
      <div className="absolute inset-2 rounded-xl border border-sky-200"></div>

      <div className="h-[84px] rounded-t-2xl bg-sky-300"></div>

      <div className="px-8 py-10 text-center">
        <h3 className="text-xl font-semibold text-black">{title}</h3>

        <p className="mt-8 text-base text-gray-500">Starting at</p>

        <div className="mt-2 flex items-end justify-center gap-2">
          <span className="text-5xl font-extrabold leading-none tracking-tight text-black">
            ₹{priceInRupees.toLocaleString("en-IN")}
          </span>
        </div>

        <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl"></div>
    </div>
  );
}


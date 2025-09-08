import React from "react";

export default function PricingCard({
  title = "LinkedIn Essentials",
  price = 1500,
  currency = "₹",
  note = "Starting at",
  period = "/month per active employee",
  className = "",
}) {
  return (
    <div
      className={
        "mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white shadow-lg " +
        "p-1 " +
        className
      }
      aria-label={`${title} pricing`}
    >
      <div className="rounded-xl border border-sky-200 overflow-hidden">
        <div className="bg-sky-300/80 px-6 py-6 text-center">
          <h3 className="text-[22px] font-semibold text-slate-800">{title}</h3>
        </div>

        <div className="bg-white px-8 py-10 text-center">
          <p className="text-lg text-slate-600">{note}</p>

          <div className="mt-2 flex items-baseline justify-center gap-1">
            <span className="text-2xl font-semibold text-slate-700">{currency}</span>
            <span className="text-5xl font-extrabold tracking-tight text-slate-900">
              {price}
            </span>
          </div>

          <p className="mt-4 text-lg text-slate-500">{period}</p>
        </div>
      </div>
    </div>
  );
}


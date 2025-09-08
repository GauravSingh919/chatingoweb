"use client";
import PricingCard from "../components/PricingCard";

export default function PricingDemo() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          LinkedIn Essentials Pricing Card
        </h1>
        <PricingCard />
        <p className="mt-8 text-gray-600 max-w-md">
          This pricing card component is built with Next.js and Tailwind CSS, 
          matching the design you provided.
        </p>
      </div>
    </div>
  );
}
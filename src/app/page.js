"use client";
import React, { useState, useEffect } from "react";
import LogoAnimation from "./components/LogoAnimation";
import Banner from "./components/Banner";
import CardAnimation from "./components/CardAnimation";
import Faq from "./components/Faq";
import JoinButton from "./components/buttons/JoinButton";
import MobileBanner from "./components/MobileBanner";
import FlyingText from "./components/FlyingText";
import FormSection from "./components/FormSection";
import PricingCard from "./components/PricingCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <LogoAnimation />
      ) : (
        <div>
          <div className="bg-[#0a0a0a]">
            <div className="relative">
              <Banner />
              <MobileBanner />
              <CardAnimation />
              <FlyingText />
              <JoinButton />
            </div>
            <FormSection />
            <Faq />
          </div>
          <div className="w-full flex items-center justify-center py-10 bg-white">
            <PricingCard />
          </div>
        </div>
      )}
    </div>
  );
}

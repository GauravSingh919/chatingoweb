"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const LogoAnimation = dynamic(() => import("./components/LogoAnimation"), { ssr: false });
const Banner = dynamic(() => import("./components/Banner"), { ssr: false });
const CardAnimation = dynamic(() => import("./components/CardAnimation"), { ssr: false });
const Faq = dynamic(() => import("./components/Faq"), { ssr: false });
const JoinButton = dynamic(() => import("./components/buttons/JoinButton"), { ssr: false });
const MobileBanner = dynamic(() => import("./components/MobileBanner"), { ssr: false });
const FlyingText = dynamic(() => import("./components/FlyingText"), { ssr: false });
const FormSection = dynamic(() => import("./components/FormSection"), { ssr: false });

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
        </div>
      )}
    </div>
  );
}

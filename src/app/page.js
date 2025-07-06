"use client";
import React, { useState, useEffect } from "react";
import LogoAnimation from "./components/LogoAnimation";
import Banner from "./components/Banner";
import CardAnimation from "./components/CardAnimation";
import ReviewPills from "./components/ReviewPills";
import LottieReviewPlayer from "./components/LottieReviewPlayer";
import Faq from "./components/Faq";
import JoinButton from "./components/buttons/JoinButton";
import MobileBanner from "./components/MobileBanner";
import FlyingText from "./components/FlyingText";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading time of the LogoAnimation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust this time to match the duration of your LogoAnimation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <LogoAnimation />
      ) : (
        <div>
          <div className="bg-[#0a0a0a]">
            <Banner />
            <MobileBanner />
            <CardAnimation />
            <FlyingText />
            <Faq />
            <JoinButton />
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lady from "../../../public/images/Lady.jpg";

gsap.registerPlugin(ScrollTrigger);

const ReviewPills = () => {
  const containerRef = useRef(null);
  const pillRefs = useRef([]);
  const [showDuplicateRows, setShowDuplicateRows] = useState(false);
  const [showSecondDuplicateRows, setShowSecondDuplicateRows] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      pillRefs.current = pillRefs.current.slice(0, 3);

      // Create individual scroll triggers for each pill with proper spacing
      pillRefs.current.forEach((pill, index) => {
        if (pill) {
          gsap.set(pill, { autoAlpha: 0, y: 50, scale: 0.9 });
          
          gsap.to(pill, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${index * 150} center`,
              end: `top+=${index * 150 + 100} center`,
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      // First duplicate rows - appears after 3rd pill
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top+=500 center",
        end: "top+=600 center",
        toggleActions: "play none none reverse",
        onEnter: () => setShowDuplicateRows(true),
        onLeaveBack: () => setShowDuplicateRows(false),
      });

      // Second duplicate rows - appears after first duplicate rows
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top+=800 center",
        end: "top+=900 center",
        toggleActions: "play none none reverse",
        onEnter: () => setShowSecondDuplicateRows(true),
        onLeaveBack: () => setShowSecondDuplicateRows(false),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Optimized animation for first duplicate rows
  useEffect(() => {
    if (showDuplicateRows) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".duplicate-row-top",
        { autoAlpha: 0, y: -30, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      )
      .fromTo(
        ".duplicate-row-bottom",
        { autoAlpha: 0, y: 30, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    } else {
      gsap.to(".duplicate-row-top, .duplicate-row-bottom", {
        autoAlpha: 0,
        y: -20,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [showDuplicateRows]);

  // Optimized animation for second duplicate rows
  useEffect(() => {
    if (showSecondDuplicateRows) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".second-duplicate-row-top-1, .second-duplicate-row-top-2",
        { autoAlpha: 0, y: -30, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
      )
      .fromTo(
        ".second-duplicate-row-bottom-1, .second-duplicate-row-bottom-2",
        { autoAlpha: 0, y: 30, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.3"
      );
    } else {
      gsap.to(".second-duplicate-row-top-1, .second-duplicate-row-top-2, .second-duplicate-row-bottom-1, .second-duplicate-row-bottom-2", {
        autoAlpha: 0,
        y: -20,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [showSecondDuplicateRows]);

  const pillTexts = [
    "The Influencer app is a smart money-saving tool that helps you earn",
    "Amazing user experience! This app has completely transformed how",
    "Simple, intuitive, and powerful. I've saved hundreds of dollars since",
  ];

  const secondPillTexts = [
    // Top row 1 (3 pills)
    "Revolutionary features that make saving effortless and fun for everyone",
    "Best investment tracking app I've ever used in my entire life",
    "Incredible support team that responds within minutes every single time",
    // Top row 2 (3 pills)
    "Game-changing technology that puts money back in your pocket daily",
    "Perfect balance of simplicity and powerful features for modern users",
    "Outstanding performance with lightning-fast loading and smooth navigation",
    // Bottom row 1 (3 pills)
    "Seamless integration with all major banks and financial institutions worldwide",
    "Advanced security features that protect your data with military-grade encryption",
    "Smart notifications that keep you informed about every financial opportunity",
    
    "Beautiful design that makes complex financial data easy to understand",
    "Customizable dashboard that adapts to your personal financial goals",
    "Expert financial advice available 24/7 through our AI-powered assistant",
  ];

  const renderPill = (text, index, isOriginal = true, prefix = "") => (
    <div
      key={isOriginal ? index : `${prefix}-${index}`}
      ref={isOriginal ? (el) => (pillRefs.current[index] = el) : null}
      className={`${isOriginal ? '' : ''} transform will-change-transform`}
    >
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg border-2 border-black rounded-full py-4 px-6 cursor-pointer transition-all duration-200">
        <Image
          src={Lady}
          alt="Lady"
          width={40}
          height={40}
          className="rounded-full w-10 h-10 object-cover mr-4"
        />
        <span className="text-sm font-medium text-gray-800">{text}</span>
      </div>
    </div>
  );

  const renderDuplicateRow = (className, rowType, texts = pillTexts, prefix = "dup") => (
    <div className={`duplicate-row-${rowType} grid grid-cols-3 gap-0 w-full place-items-center will-change-transform ${className}`}>
      {texts.map((text, index) => renderPill(text, index, false, prefix))}
    </div>
  );

  const renderSecondDuplicateRow = (className, rowType, texts = secondPillTexts) => {
    const isTop = rowType === 'top';
    const startIndex = isTop ? 0 : 6; 
    const rowTexts = texts.slice(startIndex, startIndex + 6); 
    
    return (
      <div className="flex flex-col gap-0 space-y-0">
        <div className={`second-duplicate-row-${rowType}-1 grid grid-cols-3 gap-0 w-full place-items-center will-change-transform ${className}`}>
          {rowTexts.slice(0, 3).map((text, index) => renderPill(text, startIndex + index, false, `second-${rowType}-1`))}
        </div>
        <div className={`second-duplicate-row-${rowType}-2 grid grid-cols-3 gap-0 w-full place-items-center will-change-transform ${className}`}>
          {rowTexts.slice(3, 6).map((text, index) => renderPill(text, startIndex + 3 + index, false, `second-${rowType}-2`))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[600vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          ref={containerRef}
          className="flex flex-col items-center justify-center py-20 w-full"
        >
          <div className="flex flex-col items-center w-full">
            {/* Second duplicate rows - top (2 rows) */}
            {showSecondDuplicateRows && renderSecondDuplicateRow("", "top", secondPillTexts)}

            {/* First duplicate row - top (1 row) */}
            {showDuplicateRows && renderDuplicateRow("", "top", pillTexts, "first-top")}

            {/* Original center row - pills appear one by one (1 row) */}
            <div className="grid grid-cols-3 gap-0 w-full place-items-center">
              {pillTexts.map((text, index) => renderPill(text, index, true))}
            </div>

            {/* First duplicate row - bottom (1 row) */}
            {showDuplicateRows && renderDuplicateRow("", "bottom", pillTexts, "first-bottom")}

            {/* Second duplicate rows - bottom (2 rows) */}
            {showSecondDuplicateRows && renderSecondDuplicateRow("", "bottom", secondPillTexts)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPills;
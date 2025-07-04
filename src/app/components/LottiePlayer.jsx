"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect, useCallback, useRef } from "react";
import CardAnimation from "./CardAnimation";

const LottiePlayer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const frameRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastTextIndex = useRef(0);

  // Enhanced scroll texts with segment-level color control and proper spacing
  const scrollTexts = [
    {
      text: "Chatingo",
      lines: [
        [
          { text: "Chatin", color: "text-white" },
          { text: "go", color: "text-yellow-400" },
        ],
        [
          { text: "Go Live", color: "text-white" },
          { text: " ", color: "text-white" }, // Proper space

          { text: "Public", color: "text-white" },
          { text: " ", color: "text-white" }, // Proper space

          { text: "Share", color: "text-white" },
        ],
      ],
    },
    {
      text: "Discover Innovation",
      lines: [
        [
          { text: "Discover", color: "text-green-400" },
          { text: " ", color: "text-white" }, // Proper space
          { text: "Innovation", color: "text-purple-400" },
        ],
      ],
    },
    {
      text: "Create Your Future",
      lines: [
        [
          { text: "Create", color: "text-orange-400" },
          { text: " ", color: "text-white" },
          { text: "Your", color: "text-white" },
          { text: " ", color: "text-white" },
          { text: "Future", color: "text-cyan-400" },
        ],
      ],
    },
    {
      text: "Sell Services",
      lines: [
        [{ text: "Sell Products", color: "text-yellow-400" }],
        [{ text: "Sell Accounts", color: "text-green-400" }],
        [{ text: "Sell Unique", color: "text-pink-400" }],
      ],
    },
    {
      text: "Welcome to the industry and checkout our latest features",
      lines: [
        [
          { text: "Welcome", color: "text-emerald-400" },
          { text: " ", color: "text-white" },
          { text: "to", color: "text-emerald-400" },
          { text: " ", color: "text-white" },
          { text: "the", color: "text-emerald-400" },
          { text: " ", color: "text-white" },
          { text: "industry", color: "text-emerald-400" },
        ],
        [
          { text: "checkout", color: "text-indigo-400" },
          { text: " ", color: "text-white" },
          { text: "our", color: "text-indigo-400" },
          { text: " ", color: "text-white" },
          { text: "latest", color: "text-indigo-400" },
          { text: " ", color: "text-white" },
          { text: "features", color: "text-rose-400" },
        ],
      ],
    },
    {
      text: "",
      lines: [],
    },
  ];

  const handleScroll = useCallback(() => {
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - lastScrollY.current) > 1) {
        setScrollY(currentScroll);
        lastScrollY.current = currentScroll;

        const textIndex = Math.min(
          Math.floor(currentScroll / 300),
          scrollTexts.length - 1
        );

        if (textIndex !== lastTextIndex.current) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentTextIndex(textIndex);
            setIsTransitioning(false);
          }, 150);
          lastTextIndex.current = textIndex;
        }
      }

      frameRef.current = null;
    });
  }, [scrollTexts.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [handleScroll]);

  const maxZoom = 4;
  const zoomScale = 1 + (scrollY / (scrollTexts.length * 300)) * (maxZoom - 1);

  const mobilemaxZoom = 6;
  const mobilezoomScale =
    1 + (scrollY / (scrollTexts.length * 300)) * (mobilemaxZoom - 1);

  // Progressive text scaling - each section gets bigger
  const baseTextScale = 1 + currentTextIndex * 0.3; // Increase by 0.3 for each section
  const scrollProgress = (scrollY % 300) / 300;
  const additionalScale = 1 + scrollProgress * 0.2; // Additional scaling within each section
  const textZoomScale = baseTextScale * additionalScale;

  const textOpacity = isTransitioning
    ? 0
    : scrollProgress < 0.8
    ? 1
    : 1 - (scrollProgress - 0.8) / 0.2;
  const fadeOutLottie = scrollY > (scrollTexts.length - 1) * 300;

  const renderColoredText = (textObj) => {
    if (!textObj.lines || !Array.isArray(textObj.lines)) return null;

    return (
      <div className="flex flex-col gap-2 text-center">
        {textObj.lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex flex-row justify-center flex-wrap"
          >
            {line.map((segment, segmentIndex) => (
              <span
                key={segmentIndex}
                className={`${segment.color} text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold`}
                style={{
                  whiteSpace: segment.text === " " ? "pre" : "nowrap",
                }}
              >
                {segment.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div
        className="relative hidden xl:block"
        style={{ height: `${scrollTexts.length * 60}vh` }}
      >
        <div className="fixed inset-0">
          {/* Fixed Lottie Background - Desktop */}
          <div
            className="absolute inset-0 desktop"
            style={{
              transform: `scale(${zoomScale})`,
              willChange: "transform",
              transformOrigin: "center center",
            }}
          >
            <Player
              autoplay
              loop
              src="/lottieanimation/lottie.json"
              className="w-full h-full object-cover hidden xl:block"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minWidth: "100vw",
                minHeight: "100vh",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Text Overlay */}
        <div
          className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{ opacity: fadeOutLottie ? 0 : 1 }}
        >
          <div className="text-center px-10 xl:w-1/2">
            <h1
              className="text-center break-words text-[20px] sm:text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-2xl transition-all duration-300 ease-out leading-tight"
              style={{
                opacity: textOpacity,
                transform: `scale(${textZoomScale})`,
                willChange: "opacity, transform",
              }}
            >
              {renderColoredText(scrollTexts[currentTextIndex])}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottiePlayer;

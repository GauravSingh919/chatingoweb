"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect, useCallback, useRef } from "react";
import CardAnimation from "./CardAnimation";
import LottieVideoPlayer from "./LottieVideoPlayer";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const frameRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastTextIndex = useRef(0);

  // Enhanced scroll texts with segment-level color control and proper spacing
  const scrollTexts = [
    {
      text: "Chatingo",
      lines: [
        [
          {
            text: "Chatin",
            color: "text-white",
            size: "text-6xl md:text-5xl lg:text-6xl xl:text-7xl",
          },
          {
            text: "go",
            color: "text-yellow-400",
            size: "text-6xl md:text-5xl lg:text-6xl xl:text-7xl",
          },
        ],
        [
          {
            text: "Go Live",
            color: "text-gray-300",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: "Posts",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: "Reels",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: "Stories",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
          },
        ],
      ],
    },
    {
      text: "Discover Innovation",
      lines: [
        [
          {
            text: "Discover",
            color: "text-green-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "Innovation",
            color: "text-purple-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
      ],
    },
    {
      text: "Create Your Future",
      lines: [
        [
          {
            text: "Create",
            color: "text-orange-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "Your",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "Future",
            color: "text-cyan-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
      ],
    },
    {
      text: "Sell Services",
      lines: [
        [
          {
            text: "Sell Products",
            color: "text-yellow-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "Share Ideas",
            color: "text-green-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "Showcase Talent",
            color: "text-pink-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
      ],
    },
    {
      text: "Welcome to the industry and checkout our latest features",
      lines: [
        [
          {
            text: "Welcome",
            color: "text-emerald-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "to",
            color: "text-emerald-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "the",
            color: "text-emerald-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "industry",
            color: "text-emerald-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "checkout",
            color: "text-indigo-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "our",
            color: "text-indigo-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "latest",
            color: "text-indigo-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "features",
            color: "text-rose-400",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
      ],
    },
    {
      text: "",
      lines: [],
    },
  ];

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

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

  // Calculate responsive scale based on screen size and scroll
const calculateResponsiveScale = () => {
  const { width, height } = dimensions;

  if (width === 0 || height === 0) return 2.5; // fallback

  let baseScale;

  // ✅ Custom scale per screen size
  if (width < 480) {
    baseScale = 4; // Small Mobile
  } else if (width < 768) {
    baseScale = 2; // Large Mobile / Small Tablet
  } else if (width < 1024) {
    baseScale = 1.8; // Tablet
  } else if (width < 1440) {
    baseScale = 1.5; // Desktop
  } else {
    baseScale = 3.5; // Large Desktop
  }

  // 🔁 Scroll-based zoom (optional)
  const maxZoom = 2;
  const scrollFactor =
    1 + (scrollY / (scrollTexts.length * 300)) * (maxZoom - 1);

  return baseScale * scrollFactor;
};


  const zoomScale = calculateResponsiveScale();

  // Progressive text scaling - each section gets bigger (mobile optimized)
  const baseTextScale = 1 + currentTextIndex * 0.25;
  const scrollProgress = (scrollY % 300) / 300;
  const additionalScale = 1 + scrollProgress * 0.15;
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
                className={`${segment.color} ${
                  segment.size || "text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                } font-semibold`}
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
        className="relative xl:hidden"
        style={{ height: `${scrollTexts.length * 40}vh` }}
      >
        {/* Fixed Lottie Background - Full Screen Coverage */}
        <div className="fixed inset-0 w-screen h-screen  overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${zoomScale})`,
              willChange: "transform",
              transformOrigin: "center center",
            }}
          >
            <LottieVideoPlayer path="/lottieanimation/lottie.json" />
          </div>
        </div>

        {/* Text Overlay */}
        <div
          className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{ opacity: fadeOutLottie ? 0 : 1 }}
        >
          <div className="text-center px-4 sm:px-6 md:px-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
            <h1
              className="text-center break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold drop-shadow-2xl transition-all duration-300 ease-out leading-tight sm:leading-snug md:leading-normal"
              style={{
                opacity: textOpacity,
                transform: `scale(${textZoomScale})`,
                willChange: "opacity, transform",
                wordBreak: "break-word",
                hyphens: "auto",
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

export default Banner;

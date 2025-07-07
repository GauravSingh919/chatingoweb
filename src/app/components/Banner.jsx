"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect, useCallback, useRef } from "react";
import CardAnimation from "./CardAnimation";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const frameRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastTextIndex = useRef(0);

  // Enhanced scroll texts with segment-level color control, proper spacing, and custom sizes
  const scrollTexts = [
    {
      text: "Chatingo",
      lines: [
        [
          {
            text: "Chatin",
            color: "text-white",
            size: "text-4xl md:text-5xl lg:text-6xl xl:text-8xl",
          },
          {
            text: "go",
            color: "text-[#E4EF31]",
            size: "text-4xl md:text-5xl lg:text-6xl xl:text-8xl",
          },
        ],
        [
          {
            text: "CREATE. GROW. CHAT. SELL",
            color: "text-gray-400",
            size: "text-lg md:text-xl lg:text-2xl xl:text-2xl",
          },
        ],
      ],
    },
    {
      text: "We remove the Sh%t from ‘S’ales",
      lines: [
        [
          {
            text: "We remove the",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
        ],
        [
          {
            text: "Sh%t",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
          {
            text: "from",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },

          {
            text: "‘S’",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
          {
            text: "ales",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
        ],
      ],
    },
    {
      text: "Create Your Future",
      lines: [
        [
          {
            text: "By turning your",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
        ],
        [
          {
            text: "Dm’s into a",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
          {
            text: " ",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
          {
            text: "cash",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
        ],
        [
          {
            text: "machine",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-5xl",
          },
        ],
      ],
    },
    {
      text: "Sell Services",
      lines: [
        [
          {
            text: "as now you can...",
            color: "text-[#808080]",
            size: "text-base md:text-lg 2xl:text-xl",
          },
        ],
        [
          {
            text: "Sell",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-[#FF801A]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "Products",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "Sell",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-[#00BDB7]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "Services",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
        [
          {
            text: "Sell",
            color: "text-white",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: " ",
            color: "text-[#00BDB7]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
          {
            text: "Anything",
            color: "text-[#E4EF31]",
            size: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
          },
        ],
      ],
    },
    // {
    //   text: "cause Chatingo’s ai message feature is the most advance growth & sales agent",
    //   lines: [
    //     [
    //       {
    //         text: "cause",
    //         color: "text-gray-600",
    //         size: "text-base lg:text-3xl xl:text-2xl",
    //       },
    //       {
    //         text: " ",
    //         color: "text-white",
    //         size: "text-xl md:text-2xl lg:text-3xl xl:text-2xl",
    //       },
    //       {
    //         text: "Chatingo’s",
    //         color: "text-[#E4EF31]",
    //         size: "text-base lg:text-3xl xl:text-2xl",
    //       },
    //       {
    //         text: " ",
    //         color: "text-white",
    //         size: "text-base lg:text-3xl xl:text-2xl",
    //       },
    //       {
    //         text: "ai message",
    //         color: "text-white",
    //         size: "text-base lg:text-lg xl:text-2xl",
    //       },
    //     ],
    //     [
    //       {
    //         text: "feature is the most advance",
    //         color: "text-white",
    //         size: "text-base lg:text-lg xl:text-2xl",
    //       },
    //     ],
    //     [
    //       {
    //         text: "growth & sales agent",
    //         color: "text-white",
    //         size: "text-base lg:text-lg xl:text-2xl",
    //       },
    //     ],
    //   ],
    // },
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
        className="relative hidden xl:block"
        style={{ height: `${scrollTexts.length * 50}vh` }}
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
          <div className="text-start px-10 xl:w-1/2">
            <h1
              className={`AvantGarde-Bold text-start break-words font-bold drop-shadow-2xl transition-all duration-300 ease-out`}
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

export default Banner;

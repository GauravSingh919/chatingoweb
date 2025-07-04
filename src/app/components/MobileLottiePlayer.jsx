"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect, useCallback, useRef } from "react";
import CardAnimation from "./CardAnimation";

const MobileLottiePlayer = () => {
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
          { text: "Chatin", color: "text-white" },
          { text: "go", color: "text-yellow-400" },
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
          { text: "to", color: "text-emerald-400" }
        ],
        [
          { text: " ", color: "text-white" },
          { text: "the", color: "text-emerald-400" },
          { text: " ", color: "text-white" },
          { text: "industry", color: "text-red-400" },
        ],
        [
          { text: "checkout", color: "text-indigo-400" },
          { text: " ", color: "text-white" },
          { text: "our", color: "text-indigo-400" }
        ],
        [
          { text: " ", color: "text-white" },
          { text: "latest", color: "text-rose-400" },
          { text: " ", color: "text-white" },
          { text: "features", color: "text-violet-400" },
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
          Math.floor(currentScroll / 350),
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
    
    if (width === 0 || height === 0) return 2.5; // Default scale while loading
    
    // Calculate the aspect ratio of the viewport
    const viewportAspectRatio = width / height;
    
    // Assume lottie has a square aspect ratio (1:1) - adjust if your lottie is different
    const lottieAspectRatio = 1;
    
    let coverageScale;
    
    if (viewportAspectRatio > lottieAspectRatio) {
      // Viewport is wider than lottie - scale based on width
      coverageScale = width / 400; // Adjust 400 to match your lottie's actual width
    } else {
      // Viewport is taller than lottie - scale based on height
      coverageScale = height / 400; // Adjust 400 to match your lottie's actual height
    }
    
    // Ensure minimum scale for proper coverage on all devices
    const minScale = Math.max(2.5, coverageScale);
    
    // Add extra buffer for edge cases
    const bufferedScale = minScale * 1.2;
    
    // Scroll-based zoom
    const maxZoom = 3;
    const scrollZoom = 1 + (scrollY / (scrollTexts.length * 350)) * (maxZoom - 1);
    
    return bufferedScale * scrollZoom;
  };

  const zoomScale = calculateResponsiveScale();

  // Progressive text scaling - each section gets bigger (mobile optimized)
  const baseTextScale = 1 + currentTextIndex * 0.25;
  const scrollProgress = (scrollY % 350) / 350;
  const additionalScale = 1 + scrollProgress * 0.15;
  const textZoomScale = baseTextScale * additionalScale;

  const textOpacity = isTransitioning
    ? 0
    : scrollProgress < 0.8
    ? 1
    : 1 - (scrollProgress - 0.8) / 0.2;
  const fadeOutLottie = scrollY > (scrollTexts.length - 1) * 350;

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
        className="relative xl:hidden"
        style={{ height: `${scrollTexts.length * 60}vh` }}
      >
        {/* Fixed Lottie Background - Full Screen Coverage */}
        <div className="fixed inset-0 w-screen h-screen ">
          <div
            className="absolute inset-0 flex items-center justify-center"
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
              style={{
                width: "100vw",
                height: "100vh",
                minWidth: "100vw",
                minHeight: "100vh",
                maxWidth: "none",
                maxHeight: "none",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        {/* Text Overlay */}
        <div
          className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{ opacity: fadeOutLottie ? 0 : 1 }}
        >
          <div className="text-center px-4 sm:px-6 md:px-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
            <h1
              className="text-center break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold drop-shadow-2xl transition-all duration-350 ease-out leading-tight sm:leading-snug md:leading-normal"
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

export default MobileLottiePlayer;
"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, useInView, useScroll } from "framer-motion";

const LottieReviewPlayer = () => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const [totalFrames, setTotalFrames] = useState(75);
  const [showBigText, setShowBigText] = useState(false);

  const { scrollY } = useScroll();

  const handleScroll = useCallback(
    (latest) => {
      if (!containerRef.current) return;

      const top = containerRef.current.offsetTop;
      const height = containerRef.current.offsetHeight;

      if (latest >= top && latest <= top + height) {
        setIsSticky(true);

        if (playerRef.current && isAnimationLoaded) {
          const progress = Math.min((latest - top) / height, 1);
          playerRef.current.setSeeker(progress * 100);

          const currentFrame = progress * totalFrames;
          setShowBigText(currentFrame >= 49); // Frames to show the textt
        }
      } else {
        setIsSticky(false);
        setShowBigText(false);
      }
    },
    [isAnimationLoaded, totalFrames]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, handleScroll]);

  useEffect(() => {
    // You can remove this fetch block if totalFrames is fixed
    fetch("/lottieanimation/review.json")
      .then((res) => res.json())
      .then((data) => {
        const frames = data.op - data.ip;
        setTotalFrames(frames);
        setIsAnimationLoaded(true);
      })
      .catch(() => {
        setTotalFrames(75);
        setIsAnimationLoaded(true);
      });
  }, []);

  return (
    <div ref={containerRef} style={{ height: "350vh", position: "relative" }}>
      <motion.div
        style={{
          position: isSticky ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 100,
          backgroundColor: "#A6FF00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Player
          ref={playerRef}
          autoplay={false}
          loop={false}
          src="/lottieanimation/review.json"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      
      {/* Move the big text outside the flex container */}
      {showBigText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "fixed",
            transform: "translate(-50%, -50%)",
            fontSize: "5rem",
            fontWeight: "900",
            color: "#000",
            zIndex: 999,
            textAlign: "center",
            pointerEvents: "none", // Prevent text from blocking interactions
          }}
          className="absolute inset-0 flex  items-center justify-center container mx-auto text-wrap"
        >
          Let's Make ZapZap Together
        </motion.div>
      )}
    </div>
  );
};

export default LottieReviewPlayer;
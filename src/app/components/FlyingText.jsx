'use client'
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FlyingText = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for zoom effect (starts small, scales up as user scrolls)
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.8, 1.2, 1.5]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [50, 50, 30]);
  
  // Transform values for text animation
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [100, 50, 0, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Content to create scroll space */}
      <div className="h-[300vh] bg-black">
        {/* Fixed container for the animation */}
        <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
          {/* Animated rounded border */}
          <motion.div
            className="border-white border-[17px] w-[80vw] h-[80vh] flex items-center justify-center"
            style={{
              scale,
              borderRadius: borderRadius,
            }}
            initial={{ scale: 0.3 }}
          >
            {/* Animated text */}
            <motion.div
              className="text-center px-8"
              style={{
                opacity: textOpacity,
                y: textY,
              }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-bold leading-tight"
                initial={{ opacity: 0, y: 100 }}
              >
                Lets make Chatingo. Together
              </motion.h1>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default FlyingText;
"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Faq from "./Faq";

const hexWithAlpha = (hex, alpha) => {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
};

const CardAnimation = () => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      hexWithAlpha("#000000", 0.8),
      hexWithAlpha("#000000", 0.6),
      hexWithAlpha("#A6FF00", 1),
    ]
  );

  const faqTranslateY = useTransform(
    containerScrollProgress,
    [0.1, 0.1],
    ["10vh", "0vh"]
  );

  const cards = [
    {
      id: 1,
      title: "First Card",
      description: "This is the first card in our stack animation.",
      color: "from-purple-600 to-blue-600",
      videoUrl: "",
    },
    {
      id: 2,
      title: "Second Card",
      description: "This is the second card that stacks above the first.",
      color: "from-pink-600 to-purple-600",
      videoUrl: "",
    },
    {
      id: 3,
      title: "Check cool Public Figure",
      description: "This is the third card completing our deck.",
      color: "from-orange-600 to-pink-600",
      videoUrl: "",
    },
  ];

  const videoRefs = useRef([]);

  const getCardStyle = (index) => {
    const stackOffset = (cards.length - 1 - index) * 60;
    return {
      transform: `translateY(${stackOffset}px) scale(1)`,
      zIndex: 10 + index,
    };
  };

  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="h-[1vh] bg-black text-white flex items-center justify-center"></div>

      <motion.div
        ref={targetRef}
        className="min-h-[400vh] transition-all duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative min-h-[300vh]">
          {cards.map((card, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { amount: 0.6, once: false });

            useEffect(() => {
              const video = videoRefs.current[index];
              if (video) {
                if (isInView) {
                  video.play().catch(() => {});
                } else {
                  video.pause();
                  video.currentTime = 0;
                }
              }
            }, [isInView]);

            return (
              <div
                key={card.id}
                className="sticky -top-14 mx-auto w-[90%] max-w-6xl"
                style={getCardStyle(index)}
                ref={cardRef}
              >
                <div
                  className={`h-screen rounded-[40px] backdrop-blur-md border border-white/20 
                    shadow-2xl transition-all duration-300 ease-out
                    bg-gradient-to-br ${card.color}`}
                >
                  <div className="container mx-auto p-5 lg:p-8 h-full">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 lg:justify-between h-full">
                      <motion.div
                        className="lg:basis-[45%] space-y-2 lg:space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={textRevealVariants}
                      >
                        <div className="space-y-2 lg:space-y-4">
                          <motion.h1
                            className="text-4xl font-bold text-white leading-tight"
                            variants={childVariants}
                          >
                            {card.title}
                          </motion.h1>
                          <motion.p
                            className="text-gray-200 text-base lg:text-lg leading-relaxed"
                            variants={childVariants}
                          >
                            {card.description}
                          </motion.p>
                        </div>

                        <motion.div
                          className="flex gap-2 lg:gap-4"
                          variants={childVariants}
                        >
                          <motion.button
                            className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More
                          </motion.button>
                          <motion.button
                            className="px-6 py-3 border border-white/30 hover:border-white/50 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10"
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Explore
                          </motion.button>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="lg:basis-[45%] w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, x: 50, rotate: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        <div className="relative w-full h-[60vh] lg:h-[90vh] rounded-3xl overflow-hidden bg-white shadow-2xl">
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover"
                          >
                            <source src={card.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div className="relative z-50" style={{ y: faqTranslateY }}>
        <Faq />
      </motion.div>
    </div>
  );
};

export default CardAnimation;

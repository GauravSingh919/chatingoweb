"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Faq from "./Faq";
import FlyingText from "./FlyingText";
import LottieVideoPlayer from "./LottieVideoPlayer";

const hexWithAlpha = (hex, alpha) => {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
};

const CardAnimation = () => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const faqSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // FAQ section scroll progress for upward clamping animation
  const { scrollYProgress: faqScrollProgress } = useScroll({
    target: faqSectionRef,
    offset: ["start end", "end start"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      hexWithAlpha("#0A0A0A", 1),
      hexWithAlpha("#0A0A0A", 1),
      hexWithAlpha("#0A0A0A", 1),
    ]
  );

  // Transform for FAQ to clamp upward over the fixed last card
  // const faqTranslateY = useTransform(
  //   faqScrollProgress,
  //   [0, 0.3, 1],
  //   ["100vh", "0vh", "0vh"]
  // );

  const cards = [
    {
      id: 1,
      title: "Influencer Driven",
      description: "This is the first card in our stack animation.",
      color: "from-[#0A0A0A] to-[#0A0A0A]",
      videoUrl: "/lottieanimation/card.json",
    },
    {
      id: 2,
      title: "Second Card",
      description: "This is the second card that stacks above the first.",
      color: "from-[#FE4747] to-[#FE4747]",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Check cool Public Figure",
      description: "This is the third card completing our deck.",
      color: "from-[#FF801A] to-[#FF801A]",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
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

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // you can adjust the breakpoint as needed
    };
    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="lg:h-[1vh] bg-[#0a0a0a]"></div>

      <motion.div
        ref={targetRef}
        className="min-h-[300vh] lg:min-h-[350vh] transition-all duration-300"
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
                className="sticky -top-14 mx-auto w-[90%] max-w-7xl"
                style={getCardStyle(index)}
                ref={cardRef}
              >
                <div
                  className={`h-[70vh] lg:h-screen overflow-hidden rounded-[40px] backdrop-blur-md border border-white/20 
                    shadow-2xl transition-all duration-300 ease-out
                    bg-gradient-to-br ${card.color}`} 
                >
                  <div className="container mx-auto lg:h-full">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-between h-full">
                      <motion.div
                        className="md:basis-[50%] space-y-2 lg:space-y-6 pt-20 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={textRevealVariants}
                      >
                        <div className="space-y-2 lg:space-y-4  p-5 lg:p-8 lg:pl-20 ">
                          <motion.h1
                            className="text-6xl lg:text-4xl 2xl:text-[90px] font-bold text-white  text-start"
                            variants={childVariants}
                          >
                            {card.title}
                          </motion.h1>
                          <motion.p
                            className="text-gray-200  text-2xl lg:text-4xl "
                            variants={childVariants}
                          >
                            {card.description}
                          </motion.p>
                        </div>

                        {/* <motion.div
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
                        </motion.div> */}
                      </motion.div>

                      <motion.div
                        className="lg:basis-[50%] w-full lg:h-full flex items-center justify-center"
                        initial={{
                          opacity: 0,
                          x: 50,
                          rotate: isMobile ? 0 : -10,
                        }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        <div className="relative w-full  rounded-3xl overflow-hidden  pb-20  overflow-y-hidden">
                          {/* <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover"
                          >
                            <source src={card.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video> */}
                          <LottieVideoPlayer path={card.videoUrl} />
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
    </div>
  );
};

export default CardAnimation;

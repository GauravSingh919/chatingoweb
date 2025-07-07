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

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
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

  const cards = [
    {
      id: 1,
      titleParts: [
        { text: "Increase your Insta", color: "text-white" },
        { text: " Followers by 60%", color: "text-white" },
        { text: " Month on Month", color: "text-[#808080]" },
      ],
      descriptionParts: [
        { text: "Chatingo ", color: "text-[#E4EF31]" },
        { text: "increases your profiles reach by", color: "text-gray-400" },
        { text: " triggering maximum engagement on ", color: "text-gray-200" },
        { text: "Reels, Posts, Stories and Live", color: "text-white" },
      ],
      color: "from-[#0A0A0A] to-[#0A0A0A]",
      videoUrl: "/videos/video1.webm",
    },
    {
      id: 2,
      titleParts: [
        { text: "Turn every comment", color: "text-white" },
        { text: " into a", color: "text-white" },
        { text: " potential sale", color: "text-[#E4EF31]" },
      ],
      descriptionParts: [
        { text: "Chatingo’s ", color: "text-[#E4EF31]" },
        { text: "Sentimental AI", color: "text-white" },
        { text: " collects payments inside the DM by showing your ", color: "text-white" },
        { text: "services or products", color: "text-[#E4EF31]" },
        { text: " & also follow backs with interested leads.", color: "text-white" },
      ],
      color: "from-[#FE4747] to-[#FE4747]",
      videoUrl: "/videos/video1.webm",
    },
    {
      id: 3,
      titleParts: [
        { text: "Turn every Follower", color: "text-white" },
        { text: " into a", color: "text-white" },
        { text: " Global", color: "text-[#E4EF31]" },
        { text: " Community", color: "text-white" },
      ],
      descriptionParts: [
        { text: "Chatingo", color: "text-[#E4EF31]" },
        { text: " has its own community space ", color: "text-white" },
        { text: "where people can meet, teach, and learn from each other online. So build your ", color: "text-gray-200" },
        { text: "community across the globe.", color: "text-[#E4EF31]" },
      ],
      color: "from-[#FF801A] to-[#FF801A]",
      videoUrl: "/videos/video1.webm",
    },
    {
      id: 4,
      titleParts: [
        { text: "No more", color: "text-white" },
        { text: " complicated brain rot", color: "text-white" },
        { text: " Setups", color: "text-white" },
      ],
      descriptionParts: [
        { text: "Chatingo", color: "text-[#E4EF31]" },
        { text: " has the most easiest pick and drop automation builder for your instagram.", color: "text-white" },
      ],
      color: "from-[#00bdb7] to-[#00bdb7]",
      videoUrl: "/videos/video1.webm",
    },
  ];

  const videoRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardStyle = (index) => {
    const stackOffset = (cards.length - 1 - index) * 60;
    return {
      transform: `translateY(${stackOffset}px) scale(1)`,
      zIndex: 10 + index,
    };
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
                className="sticky -top-28  mx-auto w-[90%] max-w-7xl"
                style={getCardStyle(index)}
                ref={cardRef}
              >
                <div
                  className={`h-screen overflow-hidden rounded-[40px] backdrop-blur-md border border-white/20 
                    shadow-2xl transition-all duration-300 ease-out
                    bg-gradient-to-br ${card.color}`}
                >
                  <div className="container mx-auto lg:h-full">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-between h-full items-center xl:items-start">
                      <motion.div
                        className="md:basis-[50%] space-y-2 lg:space-y-6 pt-10 lg:pt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={textRevealVariants}
                      >
                        <div className="space-y-2 lg:space-y-4 p-5 lg:p-8 lg:pl-10 xl:pl-20">
                          <motion.h1
                            className="text-3xl lg:text-6xl 2xl:text-7xl font-bold text-start AvantGarde-Bold"
                            variants={childVariants}
                          >
                            {card.titleParts.map((part, idx) => (
                              <span key={idx} className={part.color}>
                                {part.text}
                              </span>
                            ))}
                          </motion.h1>
                          <motion.p
                            className="text-lg lg:text-2xl AvantGarde-Bold font-bold lg:pt-5"
                            variants={childVariants}
                          >
                            {card.descriptionParts.map((part, idx) => (
                              <span key={idx} className={part.color}>
                                {part.text}
                              </span>
                            ))}
                          </motion.p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="lg:basis-[50%] w-full flex items-center justify-center lg:pt-20"
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
                        <div className="relative w-full rounded-3xl overflow-hidden">
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-[32vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-contain"
                          >
                            <source src={card.videoUrl} type="video/webm" />
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
    </div>
  );
};

export default CardAnimation;

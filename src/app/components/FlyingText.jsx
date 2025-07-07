import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const FlyingText = () => {
  const sectionRef = useRef(null);
  // const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Track screen width to apply responsive scaling
  const [maxScale, setMaxScale] = useState(13);
  const [fontSize, setFontSize] = useState("5px");

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 300) setMaxScale(2);
      else if (width < 480) setMaxScale(7);
      else if (width < 768) setMaxScale(6);
      else if (width < 1024) setMaxScale(8);
      else if (width < 1440) setMaxScale(8);
      else if (width < 1536) setMaxScale(11);
      else setMaxScale(13);

       // Font size setting
    if (width < 300) setFontSize("5px");
    else if (width < 480) setFontSize("5px");
    else if (width < 768) setFontSize("8px");
    else if (width < 1024) setFontSize("8px");
    else if (width < 1440) setFontSize("12px");
    else setFontSize("14px");
    };

    updateScale(); // on mount
    window.addEventListener("resize", updateScale); // on resize
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Apply responsive scale transform
  const scale = useTransform(scrollYProgress, [0, 0.9], [0.1, maxScale]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.9], [100, 100]);
  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.7, 0.85],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.3)", "rgba(0, 0, 0, 0)"]
  );
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 0.9], [0, 0]);

  return (
    <div ref={sectionRef} className="relative h-[300vh] xl:h-[350vh] 2xl:h-[400vh] ">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="border-[2px] w-[160px] xl:w-[180px] h-[70px] flex items-center justify-center relative"
          style={{
            scale,
            borderRadius,
            borderColor,
          }}
          initial={false}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            mass: 1,
          }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center z-10"
            style={{
              opacity: textOpacity,
              y: textY,
            }}
          >
            <motion.h1
              className="text-white AvantGarde-Bold font-bold leading-tight px-4 z-10 text-wrap"
              style={{
                fontSize: fontSize,
              }}
              initial={false}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <span className="block ">Let's Make</span>
              <span className="block sm:inline sm:ml-1">
                Chatin<span className="text-[#E4EF31]">go.</span> Together.
              </span>
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlyingText;
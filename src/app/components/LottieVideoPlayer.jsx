"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieVideoPlayer = ({ path, loop = true, autoplay = true, style, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      path,
      style,
      className
    });

    return () => anim.destroy(); // Cleanup
  }, [path, loop, autoplay]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default LottieVideoPlayer;

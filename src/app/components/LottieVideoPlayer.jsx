"use client";
import { useEffect, useRef } from "react";

const LottieVideoPlayer = ({ path, loop = true, autoplay = true, style, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationInstance;
    let isMounted = true;

    (async () => {
      const lottieModule = await import("lottie-web");
      if (!isMounted || !containerRef.current) return;
      const lottie = lottieModule.default || lottieModule;
      animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        path,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });
    })();

    return () => {
      isMounted = false;
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [path, loop, autoplay]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} className={className} />;
};

export default LottieVideoPlayer;

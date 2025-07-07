import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 1500); // Zoom in
    const timer2 = setTimeout(() => setAnimationStep(2), 2500); // Rotate 45deg
    const timer3 = setTimeout(() => setAnimationStep(3), 3500); // Spread out as rounded square
    const timer4 = setTimeout(() => setAnimationStep(4), 5000); // Fade out
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <AnimatePresence>
        {animationStep < 4 && (
          <>
            {/* Neon Background */}
            <motion.div
              className="absolute inset-0 bg-[#FE4747]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Animated neon glow effects */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FE4747] rounded-full blur-3xl opacity-30"
                  animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.2, 0.8, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#FE4747] rounded-full blur-2xl opacity-40"
                  animate={{
                    x: [0, -40, 60, 0],
                    y: [0, 50, -20, 0],
                    scale: [1, 0.7, 1.3, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 right-3/4 w-20 h-20 bg-[#FE4747] rounded-full blur-xl opacity-35"
                  animate={{
                    x: [0, 70, -50, 0],
                    y: [0, -60, 40, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{
                  background: 'black',
                  backgroundSize: '50px 50px'
                }} />
              </div>
            </motion.div>

            {/* Dark Box Container */}
            <motion.div
              className="absolute bg-[#0a0a0a] flex items-center justify-center"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'center center',
              }}
              initial={{ 
                width: '120px', 
                height: '120px',
                borderRadius: '15px',
                boxShadow: '0 0 50px rgba(0,255,255,0.3), inset 0 0 50px rgba(0,0,0,0.8)',
                scale: 1,
                rotate: 0,
                x: '-50%',
                y: '-50%'
              }}
              animate={{
                // Step 1: Zoom in
                scale: animationStep >= 1 ? 1.2 : 1,
                // Step 2: Rotate 45 degrees (stays in center)
                rotate: animationStep >= 2 ? (animationStep >= 3 ? 0 : 45) : 0,
                // Step 3: Spread out as rounded square (rotate back to 0)
                width: animationStep >= 3 ? '300vw' : (animationStep >= 1 ? '150px' : '120px'),
                height: animationStep >= 3 ? '300vh' : (animationStep >= 1 ? '150px' : '120px'),
                borderRadius: animationStep >= 3 ? '100px' : '15px',
                boxShadow: animationStep >= 3 ? '0 0 0px rgba(0,255,255,0), inset 0 0 0px rgba(0,0,0,0)' : '0 0 50px rgba(0,255,255,0.3), inset 0 0 50px rgba(0,0,0,0.8)',
                scale: animationStep >= 3 ? 1 : (animationStep >= 1 ? 1.2 : 1),
                x: '-50%',
                y: '-50%',
              }}
              transition={{ 
                duration: animationStep === 1 ? 1 : animationStep === 2 ? 0.6 : animationStep === 3 ? 1.2 : 0.5,
                ease: animationStep === 1 ? "easeOut" : animationStep === 2 ? "easeInOut" : "easeInOut"
              }}
            >
              {/* Logo Icon */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: animationStep >= 3 ? 0.7 : 1
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  {/* Main logo shape */}
                  <div className="w-28 h-28 lg:w-32 lg:h-28 bg-[#0a0a0a] rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-tr from-white/20 to-transparent rounded-lg" />
                    
                    {/* Thunder bolt icon placeholder */}
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L4.09 12.67a1 1 0 0 0 .83 1.33H11L11 22l8.91-10.67a1 1 0 0 0-.83-1.33H13V2z" fill="white"/>
                      </svg>
                    </div>
                    
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-[#FE4747]"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(254,71,71,0.5)',
                          '0 0 40px rgba(254,71,71,0.8)',
                          '0 0 20px rgba(254,71,71,0.5)',
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogoAnimation;
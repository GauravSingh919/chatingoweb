import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Zap, Star, Heart, Trophy } from 'lucide-react';

const ColorJoinButton = ({ onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Your brand colors
  const colors = [
    '#FFFFFF', // doomscroll
    '#FE4747', // clickbait coral
    '#00BDB7', // automint
    '#E4EF31', // hot tangerine
  ];

  // Corresponding icons for each color
  const icons = [User, Zap, Star, Heart];

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [colors.length]);

  const currentColor = colors[currentIndex];
  const CurrentIcon = icons[currentIndex];

  return (
    <motion.button
      onClick={onClick}
      className="relative flex items-center bg-black rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated circular background */}
      <motion.div
        className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
        style={{ border: `3px solid ${currentColor}` }}
      >
        {/* Rotating border effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, ${currentColor}, transparent, ${currentColor})`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Inner circle with constant background */}
        <motion.div
          className="absolute inset-1 rounded-full flex items-center justify-center bg-black"
        >
          {/* Animated icon */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                scale: 0,
                rotate: -180,
                opacity: 0
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1
              }}
              exit={{
                scale: 0,
                rotate: 180,
                opacity: 0
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <CurrentIcon
                size={20}
                color={currentIndex === 0 || currentIndex === 3 ? '#000' : '#fff'}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Join text */}
      <motion.span
        className="text-white font-semibold px-4 py-2 text-lg"
        animate={{
          color: currentColor === '#0A0A0A' ? '#FFFFFF' : currentColor,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        Join
      </motion.span>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-full opacity-20 blur-lg"
        animate={{
          backgroundColor: currentColor,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

// Example usage
export default function App() {
  const [showForm, setShowForm] = useState(false);

  const handleJoinClick = () => {
    setShowForm(true);
    console.log('Join button clicked!');
  };

  return (
    <div >
      <div className="text-center">

        <ColorJoinButton onClick={handleJoinClick} />

      </div>
    </div>
  );
}

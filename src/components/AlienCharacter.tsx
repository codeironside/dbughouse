import React from 'react';
import { motion } from 'framer-motion';

interface AlienCharacterProps {
  position: number;
  onComplete: () => void;
}

const AlienCharacter: React.FC<AlienCharacterProps> = ({ position, onComplete }) => {
  return (
    <motion.div
      initial={{ x: -100, y: position }}
      animate={{ x: window.innerWidth + 100 }}
      transition={{
        duration: 8,
        ease: "linear",
        onComplete
      }}
      className="absolute left-0 z-10"
    >
      <div className="relative w-24 h-32">
        {/* Alien Body */}
        <motion.div
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-orange-500/80 to-orange-600/80 rounded-t-full">
            {/* Eyes */}
            <div className="absolute top-4 left-2 w-3 h-3 bg-black rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-4 right-2 w-3 h-3 bg-black rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Body */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-orange-600/80 to-orange-700/80 rounded-lg">
            {/* Tech patterns */}
            <div className="absolute top-2 left-2 w-12 h-8 grid grid-cols-3 gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-orange-400/50 rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Legs */}
          <motion.div
            animate={{
              rotate: [-15, 15, -15]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-4 w-4 h-8 bg-orange-600/80 rounded-b-lg origin-top"
          ></motion.div>
          <motion.div
            animate={{
              rotate: [15, -15, 15]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-4 w-4 h-8 bg-orange-600/80 rounded-b-lg origin-top"
          ></motion.div>
        </motion.div>

        {/* Energy field */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent blur-lg rounded-full animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default AlienCharacter;
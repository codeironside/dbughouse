import React from 'react';
import { motion } from 'framer-motion';

const SpaceBattle = () => {
  const laserBeam = (side: 'left' | 'right', delay: number) => (
    <motion.div
      initial={{ 
        x: side === 'left' ? '10%' : '90%',
        y: Math.random() * window.innerHeight,
        scale: 0
      }}
      animate={{
        x: side === 'left' ? '90%' : '10%',
        y: Math.random() * window.innerHeight,
        scale: [0, 1, 1, 0]
      }}
      transition={{
        duration: 1,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }}
      className="relative"
    >
      {/* Enhanced laser beam effect */}
      <div className={`absolute w-16 h-1 ${side === 'left' ? 'bg-red-500' : 'bg-green-500'} rounded-full blur-sm`}></div>
      <div className={`absolute w-12 h-0.5 ${side === 'left' ? 'bg-red-400' : 'bg-green-400'} rounded-full blur-md`}></div>
      <div className={`absolute w-8 h-0.5 ${side === 'left' ? 'bg-red-300' : 'bg-green-300'} rounded-full blur-lg`}></div>
    </motion.div>
  );

  const explosion = (delay: number) => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.5, 2, 0],
        opacity: [0, 1, 0.8, 0]
      }}
      transition={{
        duration: 1.2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5
      }}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {/* Enhanced explosion effect */}
      <div className="relative">
        <div className="absolute w-20 h-20 rounded-full bg-orange-500/40 blur-xl"></div>
        <div className="absolute w-16 h-16 rounded-full bg-yellow-500/60 blur-lg"></div>
        <div className="absolute w-12 h-12 rounded-full bg-white/80 blur-md"></div>
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
          className="absolute w-24 h-24 -inset-2"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-orange-500/60"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-16px)`,
              }}
            ></div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {/* Enhanced star field */}
      <div className="absolute inset-0">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              backgroundColor: `rgb(255, ${Math.random() * 50 + 205}, ${Math.random() * 50 + 205})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-transparent to-blue-900 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900 via-transparent to-yellow-900 blur-3xl"></div>
      </div>

      {/* Enhanced laser battle */}
      {[...Array(15)].map((_, i) => laserBeam('left', i * 0.2))}
      {[...Array(15)].map((_, i) => laserBeam('right', i * 0.2))}

      {/* Enhanced explosions */}
      {[...Array(8)].map((_, i) => explosion(i * 0.3))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpaceBattle;
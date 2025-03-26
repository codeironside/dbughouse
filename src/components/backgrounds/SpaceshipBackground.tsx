import React from 'react';
import { motion } from 'framer-motion';

const AlienShip = ({ delay = 0 }) => {
  const randomPath = () => {
    const startY = Math.random() * window.innerHeight;
    const controlY = Math.random() * window.innerHeight;
    const endY = Math.random() * window.innerHeight;
    
    return [
      [window.innerWidth + 100, startY],
      [window.innerWidth * 0.75, controlY],
      [-100, endY]
    ];
  };

  return (
    <motion.div
      initial={{ x: window.innerWidth + 100, y: Math.random() * window.innerHeight }}
      animate={{
        x: [-100],
        y: randomPath()[2][1],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute"
    >
      <div className="relative w-48 h-24">
        {/* Advanced shield effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/20 to-purple-500/10 blur-2xl rounded-full animate-pulse"></div>
        
        {/* Main ship body - more detailed and realistic */}
        <div className="absolute inset-0">
          {/* Core structure */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full transform -skew-x-12">
            {/* Surface details */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-slate-600/20 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Advanced cockpit */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12">
              <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-sm"></div>
              <div className="absolute inset-1 bg-cyan-300/60 rounded-full"></div>
              <div className="absolute inset-2 bg-cyan-200/30 rounded-full animate-glow"></div>
            </div>
            
            {/* Technology panels */}
            <div className="absolute top-2 right-1/4 flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-6 bg-slate-500/50 rounded-sm"></div>
              ))}
            </div>
            
            {/* Advanced propulsion system */}
            <div className="absolute bottom-2 right-2 flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative w-4 h-4">
                  <div className="absolute inset-0 bg-blue-500/80 rounded-full animate-pulse" 
                       style={{ animationDelay: `${i * 0.2}s` }}></div>
                  <div className="absolute inset-0 bg-blue-400/40 rounded-full blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Advanced engine trails */}
        <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
          <div className="relative w-24 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 via-purple-500/50 to-transparent blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-transparent blur-lg animate-pulse"></div>
          </div>
        </div>
        
        {/* Energy field fluctuations */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default function SpaceshipBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-900/90">
      {/* Enhanced space environment */}
      <div className="absolute inset-0">
        {/* Distant stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
        
        {/* Nebula effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl"></div>
      </div>
      
      {/* Advanced grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Ships with varied sizes */}
      {[...Array(8)].map((_, i) => (
        <AlienShip key={i} delay={i * 2} />
      ))}
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Chicken = ({ index, onHit }: { index: number; onHit: () => void }) => {
  const controls = useAnimation();
  const [isHit, setIsHit] = useState(false);

  useEffect(() => {
    controls.start({
      x: [0, 100, 0, -100, 0],
      y: [0, -50, 0, -50, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2,
      }
    });
  }, []);

  const handleHit = () => {
    if (!isHit) {
      setIsHit(true);
      controls.start({
        scale: [1, 1.2, 0],
        opacity: [1, 1, 0],
        transition: { duration: 0.5 }
      }).then(() => {
        onHit();
      });
    }
  };

  return (
    <motion.div
      animate={controls}
      onClick={handleHit}
      className="absolute w-16 h-16 cursor-pointer"
      style={{ left: `${(index % 5) * 20}%`, top: `${Math.floor(index / 5) * 20}%` }}
    >
      <div className="relative">
        {/* Chicken body */}
        <motion.div
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative w-12 h-12"
        >
          {/* Shield effect */}
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
          
          {/* Main body */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl">
            {/* Eyes */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
            
            {/* Beak */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4">
              <div className="w-full h-full bg-yellow-500 rotate-45"></div>
            </div>
          </div>
          
          {/* Wings */}
          <motion.div
            animate={{ rotate: [0, 30, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute -left-2 top-1/2 w-4 h-6 bg-orange-300 rounded-l-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: [0, -30, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute -right-2 top-1/2 w-4 h-6 bg-orange-300 rounded-r-full"
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Rocket = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
  const [shots, setShots] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: window.innerHeight - 100 });
    };

    const handleClick = () => {
      setShots(prev => [...prev, { x: position.x, y: position.y }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [position]);

  return (
    <>
      {/* Rocket */}
      <motion.div
        animate={{ x: position.x - 20, y: position.y }}
        className="fixed w-16 h-24"
      >
        <div className="relative w-full h-full">
          {/* Engine glow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-blue-500/50 blur-lg"></div>
          
          {/* Rocket body */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-b from-slate-300 to-slate-500 rounded-t-full">
              {/* Cockpit */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400/60 rounded-full"></div>
              
              {/* Wings */}
              <div className="absolute bottom-8 -left-4 w-4 h-8 bg-red-500 transform -skew-x-12"></div>
              <div className="absolute bottom-8 -right-4 w-4 h-8 bg-red-500 transform skew-x-12"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Shots */}
      {shots.map((shot, index) => (
        <motion.div
          key={index}
          initial={{ x: shot.x, y: shot.y }}
          animate={{ y: -100 }}
          transition={{ duration: 1, ease: "linear" }}
          onAnimationComplete={() => {
            setShots(prev => prev.filter((_, i) => i !== index));
          }}
          className="absolute w-2 h-8 bg-gradient-to-t from-yellow-500 to-red-500 rounded-full blur-sm"
        />
      ))}
    </>
  );
};

export default function ChickenInvaders() {
  const [chickens, setChickens] = useState([...Array(15)].map((_, i) => ({ id: i, alive: true })));

  const handleChickenHit = (id: number) => {
    setChickens(prev => prev.map(chicken => 
      chicken.id === id ? { ...chicken, alive: false } : chicken
    ));
  };

  return (
    <div className="fixed inset-0 z-0 bg-slate-900/90 overflow-hidden cursor-crosshair">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Chickens */}
      {chickens.map(chicken => chicken.alive && (
        <Chicken key={chicken.id} index={chicken.id} onHit={() => handleChickenHit(chicken.id)} />
      ))}
      
      {/* Player rocket */}
      <Rocket />
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
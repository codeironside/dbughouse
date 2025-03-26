import React from 'react';
import { motion } from 'framer-motion';

interface AlienGalleryItemProps {
  image: {
    url: string;
    title: string;
    description: string;
    category: string;
    date: string;
    views: number;
    likes: number;
  };
  index: number;
}

const AlienGalleryItem: React.FC<AlienGalleryItemProps> = ({ image, index }) => {
  const alienColors = [
    'from-green-500/30 to-blue-500/30',
    'from-purple-500/30 to-pink-500/30',
    'from-orange-500/30 to-red-500/30',
    'from-blue-500/30 to-cyan-500/30'
  ];

  const alienVariants = {
    initial: { 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: -50,
      rotate: index % 2 === 0 ? -45 : 45
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index * 0.2
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={alienVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Alien Tractor Beam Effect */}
      <div className={`absolute inset-0 bg-gradient-to-b ${alienColors[index % alienColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
      
      {/* Image Container */}
      <div className="relative backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-xl overflow-hidden">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{image.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{image.category}</span>
              <div className="flex items-center space-x-4">
                <span>{image.views} views</span>
                <span>{image.likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AlienGalleryItem;
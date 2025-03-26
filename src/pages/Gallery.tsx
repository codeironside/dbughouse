import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AlienGalleryItem from '../components/AlienGalleryItem';
import AlienCharacter from '../components/AlienCharacter';
import { Image } from 'lucide-react';
import Scene3D from '../components/Scene3D';

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200',
    title: 'Advanced Programming Concepts',
    description: 'Deep dive into modern programming paradigms and practices',
    category: 'Programming',
    date: '2025-03-01',
    views: 1234,
    likes: 567
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200',
    title: 'Cybersecurity Fundamentals',
    description: 'Essential security practices for modern applications',
    category: 'Security',
    date: '2025-03-02',
    views: 2345,
    likes: 890
  },
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200',
    title: 'AI & Machine  Courses',
    description: 'Exploring artificial intelligence and machine  Courses concepts',
    category: 'AI',
    date: '2025-03-03',
    views: 3456,
    likes: 1234
  },
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    title: 'Cloud Computing',
    description: 'Understanding modern cloud architecture and services',
    category: 'Cloud',
    date: '2025-03-04',
    views: 4567,
    likes: 2345
  },
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    title: 'DevOps Practices',
    description: 'Modern development and operations methodologies',
    category: 'DevOps',
    date: '2025-03-05',
    views: 5678,
    likes: 3456
  },
  {
    url: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1200',
    title: 'Blockchain Technology',
    description: 'Exploring distributed ledger technologies',
    category: 'Blockchain',
    date: '2025-03-06',
    views: 6789,
    likes: 4567
  }
];

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [currentAlien, setCurrentAlien] = useState<number | null>(null);

  useEffect(() => {
    if (currentAlien === null && visibleItems.length < galleryItems.length) {
      setCurrentAlien(visibleItems.length);
    }
  }, [visibleItems, currentAlien]);

  const handleAlienComplete = () => {
    if (currentAlien !== null) {
      setVisibleItems(prev => [...prev, currentAlien]);
      setCurrentAlien(null);
    }
  };

  return (
    <main className="flex-grow container mx-auto px-6 py-24 relative">
      {/* Background Scene */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Walking Alien */}
        {currentAlien !== null && (
          <AlienCharacter
            position={200 + (currentAlien * 300)}
            onComplete={handleAlienComplete}
          />
        )}

        {/* Header */}
        <div className="backdrop-blur-md bg-slate-900/40 border border-orange-500/20 rounded-xl p-8 mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Image className="w-8 h-8 text-orange-400" />
            <h1 className="text-4xl font-bold text-white"> Courses Gallery</h1>
          </div>
          <p className="text-xl text-gray-300">
            Explore our curated collection of educational resources and  Courses materials.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            visibleItems.includes(index) && (
              <AlienGalleryItem key={index} image={item} index={index} />
            )
          ))}
        </div>

        {/* Meta Information */}
        <div className="mt-12 backdrop-blur-md bg-slate-900/40 border border-orange-500/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Gallery Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Total Resources</h3>
              <p className="text-3xl font-bold text-white">{galleryItems.length}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Categories</h3>
              <p className="text-3xl font-bold text-white">6</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Total Views</h3>
              <p className="text-3xl font-bold text-white">24k+</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Total Likes</h3>
              <p className="text-3xl font-bold text-white">13k+</p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
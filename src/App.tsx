import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Scene3D from './components/Scene3D';
import LoadingScreen from './components/LoadingScreen';
import SpaceshipBackground from './components/backgrounds/SpaceshipBackground';
import StarWarsBackground from './components/backgrounds/StarWarsBackground';
import ChickenInvaders from './components/backgrounds/ChickenInvaders';
const RotatingEarth = React.lazy(() => import("./components/rotating-earth"));

// const RotatingEarth = React.lazy(() => import("./components/rotating-earth"));

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced loading time
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800"
        >
          {/* Base 3D Earth Background - Always visible */}
          {/* <Scene3D /> */}
          <RotatingEarth />
          {/* Additional background effects based on route */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            {location.pathname === '/about' && <SpaceshipBackground />}
            {location.pathname === '/services' && <StarWarsBackground />}
            {location.pathname === '/blog' && <ChickenInvaders />}
            {location.pathname === '/gallery' && <SpaceshipBackground />}
          </div>
          
          <Header />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-grow relative z-10"
            >
              <Suspense fallback={<LoadingScreen />}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gallery" element={<Gallery />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
          
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

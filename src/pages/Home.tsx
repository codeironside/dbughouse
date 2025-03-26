import React, { useRef, useEffect } from 'react';
import PartnersCarousel from '../components/PartnersCarousel';
import GalleryCarousel from '../components/GalleryCarousel';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Terminal, Cpu, Workflow } from 'lucide-react';

// Terminal text animation component
const TerminalText = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const textRef = useRef(text);
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < textRef.current.length) {
        setDisplayText(prev => prev + textRef.current.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [speed]);
  
  return (
    <span className="font-mono">{displayText}<span className="animate-pulse">_</span></span>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.05]);
  const gridOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <main ref={containerRef} className="relative flex-grow w-full overflow-hidden">
      {/* Dynamic background with grid */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-black"
          style={{ opacity: backgroundOpacity }}
        />
        <motion.div 
          className="absolute inset-0 bg-grid-pattern"
          style={{ 
            backgroundImage: "radial-gradient(circle, rgba(0,255,136,0.1) 1px, transparent 1px)", 
            backgroundSize: "30px 30px",
            opacity: gridOpacity
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="min-h-screen flex flex-col justify-center mb-24"
        >
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-blue-500/10 rounded-xl shadow-2xl p-6 md:p-12 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-mono rounded-full mb-6 border border-blue-500/20">
                <TerminalText text="~/dbughouse > initialize.security()" speed={30} />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
                  Revolutionizing Tech  Courses
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
                Welcome to dbughouse — where innovation meets security. We transform complex technology concepts into 
                practical  Courses for tomorrow's challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 rounded-xl backdrop-blur-md border border-slate-700/50 bg-slate-800/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Learn</h3>
                    <p className="text-gray-300">
                      Industry-leading security  Courses with cutting-edge protection systems.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 rounded-xl backdrop-blur-md border border-slate-700/50 bg-slate-800/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-400 mb-4">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Develop</h3>
                    <p className="text-gray-300">
                      Custom software  Courses tailored to your security needs.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 rounded-xl backdrop-blur-md border border-slate-700/50 bg-slate-800/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900/50 text-purple-400 mb-4">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Innovate</h3>
                    <p className="text-gray-300">
                      Pushing boundaries with AI-driven security  Courses.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative backdrop-blur-md bg-slate-900/40 border border-slate-700/50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <Workflow className="w-8 h-8 text-blue-400 mr-3" />
              Classes
            </h2>
            <GalleryCarousel />
          </div>
        </motion.section>

        {/* Partners Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative backdrop-blur-md bg-slate-900/40 border border-slate-700/50 rounded-xl p-8">
            <div className="absolute -bottom-20 right-20 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Trusted Partners</h2>
            <PartnersCarousel />
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative backdrop-blur-md bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl shadow-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" 
                 style={{
                   backgroundImage: "radial-gradient(circle, rgba(0,255,136,0.1) 1px, transparent 1px)", 
                   backgroundSize: "20px 20px"
                 }}>
            </div>
            
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join the revolution in cybersecurity and technological innovation.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <Terminal className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        body {
          background-color: #0f172a;
          color: white;
        }
        
        .terminal-line {
          line-height: 1.6;
        }
        
        .perspective-container {
          perspective: 1000px;
        }
        
        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        
        .bg-grid-pattern {
          animation: grid-flow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
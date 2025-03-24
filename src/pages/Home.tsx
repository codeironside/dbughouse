import React, { useEffect, useRef } from 'react';
import PartnersCarousel from '../components/PartnersCarousel';
import GalleryCarousel from '../components/GalleryCarousel';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.05]);
  const gridOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Terminal animation effect
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

  return (
    <main ref={containerRef} className="relative flex-grow w-full overflow-hidden">
      {/* Dynamic background grid */}
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
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-emerald-500/10 rounded-xl shadow-2xl p-6 md:p-12 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-xs font-mono rounded-full mb-6 border border-emerald-500/20">
                <TerminalText text="~/dbughouse > system.init()" speed={30} />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                  Master Cybersecurity & Tech
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
                Welcome to dbughouse — where we transform complex security concepts into practical skills. 
                Train like hackers think, defend like experts plan.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 rounded-xl backdrop-blur-md border border-slate-700/50 bg-slate-800/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Learn</h3>
                    <p className="text-gray-300">
                      Master cybersecurity foundations through our industry-validated curriculum and hands-on labs.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 rounded-xl backdrop-blur-md border border-slate-700/50 bg-slate-800/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Build</h3>
                    <p className="text-gray-300">
                      Develop real-world defensive systems and penetration testing skills in our virtual labs.
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Innovate</h3>
                    <p className="text-gray-300">
                      Create cutting-edge security solutions using our advanced tools and expert mentorship.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Section with Perspective Effect */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </span>
              Our Training Environments
            </h2>
            <div className="perspective-container">
              <GalleryCarousel />
            </div>
          </div>
        </motion.section>

        {/* Partners Section with Neon Glow */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="relative backdrop-blur-md bg-slate-900/40 border border-slate-700/50 rounded-xl shadow-xl p-8 overflow-hidden">
            <div className="absolute -bottom-20 right-20 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </span>
              Industry Partners
            </h2>
            <PartnersCarousel />
          </div>
        </motion.section>

        {/* About Preview with Terminal-like Design */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="relative backdrop-blur-md bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 rounded-xl shadow-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 rounded-t-xl flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono mx-auto">dbughouse@terminal:~/about</div>
            </div>
            
            <div className="mt-6 font-mono text-gray-300">
              <div className="terminal-line">
                <span className="text-emerald-400">dbughouse@terminal</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~/about</span>
                <span className="text-gray-400">$ </span>
                <span className="text-white">cat who-we-are.md</span>
              </div>
              
              <div className="mt-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</h2>
                <p className="text-gray-300 mb-8 font-sans">
                  dbughouse is a cutting-edge cybersecurity training company dedicated to bridging the gap between theoretical knowledge and practical industry demands. Through immersive learning environments and advanced simulation technology, we empower security professionals and organizations to stay ahead of evolving threats.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-300 font-sans">
                      To create a world where organizations can confidently navigate the digital landscape, protected by a workforce of highly skilled security professionals trained to anticipate and neutralize tomorrow's threats.
                    </p>
                  </div>
                  
                  <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-300 font-sans">
                      To provide hyper-realistic cybersecurity training that combines adversarial thinking with defensive strategy, delivered through advanced simulation environments that mirror real-world threat scenarios.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="terminal-line mt-6">
                <span className="text-emerald-400">dbughouse@terminal</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~/about</span>
                <span className="text-gray-400">$ </span>
                <span className="text-white">_</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action with Cybersecurity Theme */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="relative backdrop-blur-md bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border border-emerald-500/20 rounded-xl shadow-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: "radial-gradient(circle, rgba(0,255,136,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
            
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join the elite network of security professionals trained to think like attackers and defend like experts.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </motion.button>
              
              <div className="mt-6 text-gray-400 text-sm flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Secure enrollment • Instant access • Continuous updates
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      {/* Global styles for the page - would normally go in a global CSS file */}
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
        
        /* Add any custom animations here */
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
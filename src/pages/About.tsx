import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Excellence",
      description: "Delivering high-quality, industry-leading solutions."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Integrity",
      description: "Acting ethically and transparently in all interactions."
    },
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: "Reliability",
      description: "Ensuring consistently dependable services."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Security",
      description: "Prioritizing the safety and privacy of our clients through robust systems."
    }
  ];

  return (
    <main className="flex-grow min-h-screen bg-gradient-to-b from-gray-100 via-orange-50 to-gray-100 perspective-1000">
      <div className="noise-overlay"></div>
      <div className="container mx-auto px-6 py-24 relative">
        <div className="absolute top-0 left-0 w-48 h-48 bg-orange-300 rounded-full blur-3xl opacity-20 -translate-x-24 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20 translate-x-24 translate-y-12"></div>
        
        <motion.section
          initial={{ opacity: 0, rotateX: -5, z: -100 }}
          animate={{ opacity: 1, rotateX: 0, z: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            transformStyle: "preserve-3d",
            boxShadow: "0 20px 70px -20px rgba(249, 115, 22, 0.4), 0 -10px 70px -10px rgba(0, 0, 0, 0.2)"
          }}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-10 mb-12 relative overflow-hidden border border-orange-200"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-100 rounded-full"></div>
          
          <div className="relative">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <h1 className="relative text-5xl font-bold text-black mb-2 hand-drawn">
                About <span className="text-orange-500">dbughouse</span>
                <div className="absolute h-3 w-full bg-orange-300 bottom-1 -z-10 skew-x-12 translate-x-2"></div>
              </h1>
              <div className="h-1 w-32 bg-orange-500 transform rotate-1 ml-2"></div>
            </motion.div>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-700 mt-8 mb-12 max-w-3xl relative neumorphic-text"
            >
              dbughouse is a forward-thinking IT and Security company dedicated to addressing technology gaps across industries. By offering innovative, secure, and tailored solutions, we aim to exceed client expectations and transform how businesses and individuals interact with technology.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12 relative">
            <motion.div
              whileHover={{ 
                translateZ: 20,
                rotateY: 2,
                boxShadow: "8px 8px 24px rgba(0, 0, 0, 0.1), -8px -8px 24px rgba(255, 255, 255, 0.7)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-orange-50 p-8 rounded-lg border-t border-l border-white border-opacity-60 shadow-inner"
            >
              <div className="cube-corner-top-left"></div>
              <h2 className="text-3xl font-bold text-black mb-4 transform translate-z-10">Our Vision</h2>
              <p className="text-gray-700 transform translate-z-5">
                To effectively mitigate technology risks for users, ensuring reliable, resilient, and efficient systems that empower modern businesses and homes.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                translateZ: 20,
                rotateY: -2,
                boxShadow: "8px 8px 24px rgba(0, 0, 0, 0.1), -8px -8px 24px rgba(255, 255, 255, 0.7)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-orange-50 p-8 rounded-lg border-t border-l border-white border-opacity-60 shadow-inner"
            >
              <div className="cube-corner-top-right"></div>
              <h2 className="text-3xl font-bold text-black mb-4 transform translate-z-10">Our Mission</h2>
              <p className="text-gray-700 transform translate-z-5">
                To reintroduce reliable, secure, and resource-efficient technology services, tailored to meet the evolving needs of businesses and individuals.
              </p>
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold text-black mb-8 relative inline-block">
            Our Core Values
            <div className="absolute h-2 w-full bg-orange-200 bottom-1 -z-10 -skew-x-6"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 25, z: -50 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  translateZ: 30,
                  scale: 1.02,
                  boxShadow: "0 30px 60px -12px rgba(249, 115, 22, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)"
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden card-3d"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-bl-full"></div>
                <motion.div 
                  className="mb-6 relative"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="glowing-icon-container">
                    {value.icon}
                    <div className="icon-shadow"></div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-black mb-2 transform translate-z-10">{value.title}</h3>
                <p className="text-gray-700 transform translate-z-5">{value.description}</p>
                <div className="card-bevel"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, rotateX: 5, z: -100 }}
          whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            transformStyle: "preserve-3d",
            boxShadow: "0 20px 70px -20px rgba(249, 115, 22, 0.4), 0 -10px 70px -10px rgba(0, 0, 0, 0.2)"
          }}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-10 relative overflow-hidden border border-orange-200"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full opacity-50 translate-x-24 translate-y-20"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-black mb-8 relative inline-block">
              What Sets Us Apart
              <div className="absolute h-2 w-full bg-orange-200 bottom-1 -z-10 -skew-x-6"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
              <motion.div
                whileHover={{ x: 10, z: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="feature-card"
              >
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg mr-4 transform translate-z-5 shadow-lg">1</span>
                  Custom Solutions
                </h3>
                <p className="text-gray-700 ml-14 transform translate-z-5">
                  We tailor every project to meet specific client needs, ensuring precision and relevance.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10, z: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="feature-card"
              >
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg mr-4 transform translate-z-5 shadow-lg">2</span>
                  Compliance and Security
                </h3>
                <p className="text-gray-700 ml-14 transform translate-z-5">
                  We adhere strictly to industry standards, ensuring legal and data security compliance in every project.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10, z: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="feature-card"
              >
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg mr-4 transform translate-z-5 shadow-lg">3</span>
                  Scalable and Future-Ready
                </h3>
                <p className="text-gray-700 ml-14 transform translate-z-5">
                  Our solutions are designed to grow with our clients, adapting to technological advancements and business expansion.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10, z: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="feature-card"
              >
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg mr-4 transform translate-z-5 shadow-lg">4</span>
                  Proven Frameworks
                </h3>
                <p className="text-gray-700 ml-14 transform translate-z-5">
                  Leveraging cutting-edge technologies and methodologies, we deliver projects on time and with measurable success.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 1000;
        }
        
        .hand-drawn {
          font-family: system-ui, sans-serif;
          letter-spacing: -0.02em;
        }
        
        .neumorphic-text {
          text-shadow: 1px 1px 1px #fff, -1px -1px 1px rgba(0,0,0,0.1);
        }
        
        .glowing-icon-container {
          position: relative;
          display: inline-block;
          transform-style: preserve-3d;
        }
        
        .icon-shadow {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 100%;
          height: 100%;
          background: rgba(249, 115, 22, 0.2);
          filter: blur(10px);
          z-index: -1;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transform: perspective(1000px);
        }
        
        .card-bevel {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          border-radius: 8px;
          box-shadow: 
            inset 2px 2px 5px rgba(255, 255, 255, 0.7), 
            inset -2px -2px 5px rgba(0, 0, 0, 0.05);
        }
        
        .feature-card {
          position: relative;
          transform-style: preserve-3d;
          transition: all 0.3s ease-out;
        }
        
        .feature-card:hover {
          transform: translateZ(10px);
        }
        
        .cube-corner-top-left, .cube-corner-top-right {
          position: absolute;
          width: 24px;
          height: 24px;
        }
        
        .cube-corner-top-left {
          top: 0;
          left: 0;
          border-top: 3px solid rgba(249, 115, 22, 0.3);
          border-left: 3px solid rgba(249, 115, 22, 0.3);
          border-top-left-radius: 8px;
        }
        
        .cube-corner-top-right {
          top: 0;
          right: 0;
          border-top: 3px solid rgba(249, 115, 22, 0.3);
          border-right: 3px solid rgba(249, 115, 22, 0.3);
          border-top-right-radius: 8px;
        }
      `}</style>
    </main>
  );
}
import React, { useRef, useEffect, useState } from 'react';
import PartnersCarousel from '../components/PartnersCarousel';
import GalleryCarousel from '../components/GalleryCarousel';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';


const RobotCanvas = () => {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Load a placeholder image for the robot's body
    const textureLoader = new THREE.TextureLoader();
    const bodyTexture = textureLoader.load('https://via.placeholder.com/400x600'); // Placeholder image
    const bodyGeometry = new THREE.PlaneGeometry(2, 3); // Adjust size to fit your image
    const bodyMaterial = new THREE.MeshBasicMaterial({ map: bodyTexture, transparent: true });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, -1.5, 0); // Position the body below the head
    scene.add(body);

    // 3D Head
    const headGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF8C00,
      metalness: 0.8,
      roughness: 0.1,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 0.5, 0); // Position the head above the body
    scene.add(head);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00FFFF,
      emissive: 0x00FFFF,
      emissiveIntensity: 0.5,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 0.7, 0.6);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 0.7, 0.6);
    head.add(rightEye);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 5;

    // Mouse movement tracking
    const onMouseMove = (event) => {
      if (!isHovered) return;

      const { clientX, clientY } = event;
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = ((clientX - rect.left) / rect.width) * 2 - 1; // Normalize to [-1, 1]
      const mouseY = -((clientY - rect.top) / rect.height) * 2 + 1; // Normalize to [-1, 1]

      // Rotate head based on mouse position
      head.rotation.y = mouseX * 0.5; // Rotate left/right
      head.rotation.x = mouseY * 0.3; // Tilt up/down
    };

    // Add event listeners for mouse hover
    mountRef.current.addEventListener('mousemove', onMouseMove);
    mountRef.current.addEventListener('mouseenter', () => setIsHovered(true));
    mountRef.current.addEventListener('mouseleave', () => {
      setIsHovered(false);
      // Reset head rotation when mouse leaves
      head.rotation.set(0, 0, 0);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Eyes pulse
      const pulseValue = (Math.sin(Date.now() * 0.003) + 1) / 2;
      eyeMaterial.emissiveIntensity = 0.5 + pulseValue * 0.5;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeEventListener('mousemove', onMouseMove);
        mountRef.current.removeEventListener('mouseenter', () => setIsHovered(true));
        mountRef.current.removeEventListener('mouseleave', () => setIsHovered(false));
      }
    };
  }, [isHovered]);

  return (
    <div className="relative flex justify-center items-center h-64 w-64 mx-auto">
      <div ref={mountRef} className="absolute inset-0 flex justify-center items-center"></div>
      {!isLoaded && <div className="text-orange-500">Loading Robot...</div>}
    </div>
  );
};



export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  return (
    <main className="flex-grow relative">
      {/* Particle Background */}
      <div className="fixed inset-0 bg-gray-50 overflow-hidden -z-10">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-orange-300 opacity-20"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero Section with 3D Robot */}
      <section className="relative h-screen flex items-center">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="w-64 h-64 bg-orange-500 rounded-full opacity-10 animate-pulse" style={{ filter: "blur(50px)" }}></div>
        </motion.div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-black mb-6 leading-tight">
              <span className="text-orange-500">Revolutionizing</span> Technology Education
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Welcome to dbughouse - where innovation meets education. We transform complex technology concepts into accessible learning experiences.
            </p>
            <motion.button 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning Today
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <RobotCanvas />
              <div className="absolute -inset-12 bg-orange-500 rounded-full opacity-10 animate-pulse" style={{ filter: "blur(30px)" }}></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-orange-500 text-center">
            <p className="mb-2">Scroll to explore</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Features Cards Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          What We <span className="text-orange-500">Offer</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Learn",
              description: "Access cutting-edge courses and workshops designed by industry experts.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            {
              title: "Build",
              description: "Create real-world projects with hands-on guidance and support.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              )
            },
            {
              title: "Innovate",
              description: "Transform your ideas into reality with our advanced tools and resources.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section with parallax */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our <span className="text-orange-500">Gallery</span>
          </motion.h2>
          
          <GalleryCarousel />
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our <span className="text-orange-500">Partners</span>
          </motion.h2>
          
          <PartnersCarousel />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-orange-500 opacity-10 rounded-full"></div>
            <div className="absolute right-32 top-12 w-32 h-32 bg-orange-500 opacity-10 rounded-full"></div>
            
            <h2 className="text-4xl font-bold text-black mb-8 relative">Who We Are</h2>
            <p className="text-gray-700 mb-8 max-w-3xl relative">
              dbughouse is a forward-thinking technology education company dedicated to bridging the gap between traditional learning and modern industry demands. Through innovative teaching methods and cutting-edge technology, we empower individuals and organizations to excel in the digital age.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To create a world where quality technology education is accessible to everyone, fostering innovation and digital literacy across all sectors of society.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide comprehensive, practical, and future-ready technology education that empowers learners to succeed in the rapidly evolving digital landscape.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-12 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of learners who have transformed their careers with dbughouse.
            </motion.p>
            
            <motion.button 
              className="bg-white text-orange-500 px-12 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </motion.section>
      
      {/* Add a fixed floating chat bot button */}
      <motion.div
        className="fixed bottom-8 right-8 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button className="bg-orange-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </motion.div>
      
      {/* CSS for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
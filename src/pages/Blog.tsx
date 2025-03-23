import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Blog() {
  const containerRef = useRef(null);
  const [activePost, setActivePost] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  // 3D background setup
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create floating text particles
    const fontLoader = new FontLoader();
    const textGeometries = [];
    const textMeshes = [];
    
    const words = ['TECH', 'BLOG', 'IDEAS', 'FUTURE', 'CLOUD', 'SECURITY', 'AI', 'IOT', 'DATA'];
    
    const createTextGeometry = (font) => {
      words.forEach((word, index) => {
        const geometry = new TextGeometry(word, {
          font: font,
          size: 0.5,
          height: 0.1,
          curveSegments: 4,
          bevelEnabled: false
        });
        
        geometry.computeBoundingBox();
        geometry.center();
        
        const material = new THREE.MeshStandardMaterial({
          color: 0xff6b00,
          transparent: true,
          opacity: 0.4,
          metalness: 0.8,
          roughness: 0.2
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position each word randomly in space
        mesh.position.x = (Math.random() - 0.5) * 30;
        mesh.position.y = (Math.random() - 0.5) * 30;
        mesh.position.z = (Math.random() - 0.5) * 30;
        
        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        scene.add(mesh);
        textGeometries.push(geometry);
        textMeshes.push({
          mesh,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.001,
            y: (Math.random() - 0.5) * 0.001,
            z: (Math.random() - 0.5) * 0.001
          },
          floatSpeed: (Math.random() - 0.5) * 0.002,
          initialY: mesh.position.y
        });
      });
    };
    
    // Load font and create text
    fontLoader.load('/fonts/helvetiker_bold.typeface.json', createTextGeometry);
    
    // Create neuron-like connections
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    const connections = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;
    }
    
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xff8c00,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Create connections between points
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xff8c00,
      transparent: true,
      opacity: 0.2
    });
    
    // Connect points that are close to each other
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );
        
        if (distance < 3) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
            new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
          ]);
          
          const line = new THREE.Line(lineGeometry, linesMaterial);
          scene.add(line);
          connections.push({
            line,
            pointsIndices: [i, j],
            pulseSpeed: Math.random() * 0.01 + 0.005,
            pulsePhase: Math.random() * Math.PI * 2
          });
        }
      }
    }
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Add point lights with different colors
    const colors = [0xff6b00, 0x00ff88, 0x0088ff];
    const pointLights = [];
    
    for (let i = 0; i < 3; i++) {
      const light = new THREE.PointLight(colors[i], 1, 20);
      light.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      scene.add(light);
      pointLights.push({
        light,
        originalPosition: light.position.clone(),
        speed: Math.random() * 0.0005 + 0.0002,
        time: Math.random() * 100
      });
    }
    
    // Position camera
    camera.position.z = 15;
    
    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.005;
      
      // Animate text
      textMeshes.forEach((item) => {
        item.mesh.rotation.x += item.rotationSpeed.x;
        item.mesh.rotation.y += item.rotationSpeed.y;
        item.mesh.rotation.z += item.rotationSpeed.z;
        
        // Floating animation
        item.mesh.position.y = item.initialY + Math.sin(time * 2) * 0.2;
      });
      
      // Animate point lights
      pointLights.forEach((item) => {
        item.time += item.speed;
        item.light.position.x = item.originalPosition.x + Math.sin(item.time) * 5;
        item.light.position.z = item.originalPosition.z + Math.cos(item.time) * 5;
      });
      
      // Animate connections
      connections.forEach((connection) => {
        const material = connection.line.material;
        material.opacity = 0.2 + Math.sin(time * connection.pulseSpeed + connection.pulsePhase) * 0.1;
      });
      
      // Slowly rotate particles
      particles.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      textGeometries.forEach((geometry) => {
        geometry.dispose();
      });
      
      textMeshes.forEach((item) => {
        item.mesh.material.dispose();
      });
      
      connections.forEach((connection) => {
        connection.line.geometry.dispose();
        connection.line.material.dispose();
      });
      
      pointLights.forEach((item) => {
        scene.remove(item.light);
      });
    };
  }, []);
  
  const blogPosts = [
    {
      title: "The Future of Cybersecurity in 2025",
      excerpt: "Exploring emerging threats and innovative solutions in the cybersecurity landscape.",
      author: "John Smith",
      date: "March 1, 2025",
      category: "Cybersecurity",
      color: "#FF6B00"
    },
    {
      title: "Smart Home Technology Trends",
      excerpt: "Latest innovations in home automation and IoT integration.",
      author: "Sarah Johnson",
      date: "February 28, 2025",
      category: "Smart Homes",
      color: "#00C2FF"
    },
    {
      title: "AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build software.",
      author: "Mike Wilson",
      date: "February 25, 2025",
      category: "Technology",
      color: "#00E676"
    },
    {
      title: "Cloud Computing Best Practices",
      excerpt: "Essential guidelines for successful cloud implementation.",
      author: "Emily Brown",
      date: "February 22, 2025",
      category: "Cloud",
      color: "#AA00FF"
    },
    {
      title: "Network Security Essentials",
      excerpt: "Fundamental principles for protecting your network infrastructure.",
      author: "David Lee",
      date: "February 20, 2025",
      category: "Security",
      color: "#FF4081"
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "Understanding the impact of edge computing on modern applications.",
      author: "Lisa Chen",
      date: "February 18, 2025",
      category: "Technology",
      color: "#FFAB00"
    }
  ];
  
  // Card animations and interactions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    },
    hover: { 
      y: -10,
      scale: 1.02,
      transition: { 
        type: "spring", 
        damping: 10 
      }
    }
  };
  
  // Wave pattern for cards
  const getCardDelay = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return (row * 0.1) + (col * 0.05);
  };
  
  return (
    <main className="relative flex-grow min-h-screen overflow-hidden">
      {/* 3D background container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-white/30 to-white/70 z-0" />
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Header section with parallax effect */}
        <motion.div
          style={{ opacity, scale }}
          className="relative mb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-8xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Blog
            </h1>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in technology.
            </p>
          </motion.div>
          
          {/* Floating elements */}
          <div className="absolute -z-10 inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255,107,0,0.2) 0%, rgba(255,107,0,0) 70%)`,
                  width: Math.random() * 200 + 50,
                  height: Math.random() * 200 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: Math.random() * 8 + 8,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Blog posts grid with 3D card effects */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                transition={{ delay: getCardDelay(index) }}
                className="relative bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden group"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                onMouseEnter={() => setActivePost(index)}
                onMouseLeave={() => setActivePost(null)}
              >
                {/* Colorful top border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2 z-10"
                  style={{ background: post.color }}
                />
                
                {/* Content */}
                <div className="p-8">
                  {/* Category badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <span 
                      className="inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-4"
                      style={{ background: post.color }}
                    >
                      {post.category}
                    </span>
                  </motion.div>
                  
                  {/* Title with hover effect */}
                  <motion.h2 
                    className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {post.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-700 mb-6"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    {post.excerpt}
                  </motion.p>
                  
                  {/* Author info and date with animated line */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  
                  {/* Animated line that grows on hover */}
                  <motion.div 
                    className="h-0.5 bg-orange-500 mt-4"
                    initial={{ width: 0 }}
                    animate={{ width: activePost === index ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Read more button that appears on hover */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activePost === index ? 1 : 0,
                      y: activePost === index ? 0 : 20 
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg font-medium"
                  >
                    Read More
                  </motion.button>
                </div>
                
                {/* Circular hover effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div 
                    className="absolute rounded-full mix-blend-overlay"
                    style={{ 
                      background: `radial-gradient(circle, ${post.color}33 0%, transparent 70%)`,
                      width: '200%',
                      height: '200%',
                      left: '-50%',
                      top: '-50%',
                      opacity: 0
                    }}
                    animate={{ 
                      opacity: activePost === index ? 0.8 : 0,
                      scale: activePost === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
        
        {/* Newsletter section with 3D and animated elements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Background with animated gradient */}
          <motion.div 
            className="absolute inset-0 -z-10"
            animate={{ 
              background: [
                'linear-gradient(120deg, #FF6B00 0%, #FF4D00 100%)',
                'linear-gradient(120deg, #FF8500 0%, #FF6B00 100%)',
                'linear-gradient(120deg, #FF6B00 0%, #FF4D00 100%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: Math.random() > 0.5 ? '50%' : '30% 70% 70% 30% / 30% 30% 70% 70%',
                  width: Math.random() * 150 + 50,
                  height: Math.random() * 150 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  rotate: [0, Math.random() * 360],
                  scale: [1, Math.random() + 0.5],
                  borderRadius: Math.random() > 0.5 
                    ? ['50%', '30% 70% 70% 30% / 30% 30% 70% 70%'] 
                    : ['30% 70% 70% 30% / 30% 30% 70% 70%', '50%']
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 p-16 text-center">
            <motion.h2 
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Never Miss an Update
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Subscribe to our newsletter for the latest technology insights delivered straight to your inbox.
            </motion.p>
            
            {/* Newsletter form with animations */}
            <motion.div 
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  {/* Input field with focus animation */}
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-lg text-black border-2 border-transparent focus:border-orange-300 focus:outline-none transition-all duration-300"
                  />
                  
                  {/* Animated input underline */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-white rounded-b-lg"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </div>
                
                {/* Subscribe button with hover effect */}
                <motion.button 
                  className="px-8 py-4 bg-white text-orange-500 rounded-lg font-bold text-lg overflow-hidden relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Subscribe</span>
                  <motion.span 
                    className="absolute inset-0 bg-orange-100 -z-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
              
              {/* Privacy note with typewriter effect */}
              <motion.p 
                className="text-white/70 text-sm mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
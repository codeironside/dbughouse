import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Home, Shield, Network, Lock, Server } from 'lucide-react';

export default function Services() {
  const containerRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  // 3D scene setup
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 25;
      particlePositions[i + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i + 2] = (Math.random() - 0.5) * 25;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xff6b00,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Create animated background shapes
    const shapes = [];
    const shapeColors = [0xff6b00, 0xff8c00, 0xffa500];
    
    for (let i = 0; i < 15; i++) {
      let geometry;
      const randomShape = Math.floor(Math.random() * 3);
      
      if (randomShape === 0) {
        geometry = new THREE.IcosahedronGeometry(Math.random() * 0.5 + 0.5, 0);
      } else if (randomShape === 1) {
        geometry = new THREE.OctahedronGeometry(Math.random() * 0.5 + 0.5, 0);
      } else {
        geometry = new THREE.TorusGeometry(Math.random() * 0.5 + 0.5, 0.2, 16, 100);
      }
      
      const material = new THREE.MeshStandardMaterial({
        color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
        roughness: 0.5,
        metalness: 0.8,
        transparent: true,
        opacity: 0.7,
      });
      
      const shape = new THREE.Mesh(geometry, material);
      
      shape.position.x = (Math.random() - 0.5) * 20;
      shape.position.y = (Math.random() - 0.5) * 20;
      shape.position.z = (Math.random() - 0.5) * 20;
      
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      
      scene.add(shape);
      shapes.push({
        mesh: shape,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
        floatSpeed: (Math.random() - 0.5) * 0.005,
        initialY: shape.position.y,
        floatFactor: Math.random() * 2,
      });
    }
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xff6b00, 1, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);
    
    // Position camera
    camera.position.z = 15;
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 20;
    controls.minDistance = 5;
    controls.enabled = false; // Disable user controls but keep automatic rotation
    
    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      frame += 0.01;
      
      // Animate particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;
      
      // Animate shapes
      shapes.forEach((shape) => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
        
        // Floating motion
        shape.mesh.position.y = shape.initialY + Math.sin(frame * shape.floatFactor) * 0.5;
      });
      
      // Slowly rotate camera
      camera.position.x = Math.sin(frame * 0.1) * 15;
      camera.position.z = Math.cos(frame * 0.1) * 15;
      camera.lookAt(0, 0, 0);
      
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
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach((shape) => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
    };
  }, []);
  
  const services = [
    {
      icon: <Code className="w-16 h-16 text-orange-500" />,
      title: "Software Development Solutions",
      description: "Custom software tailored to improve business efficiency and customer experiences.",
      features: [
        "Custom Software Development",
        "Mobile and Web Applications",
        "Enterprise Solutions",
        "DevOps and Testing"
      ]
    },
    {
      icon: <Home className="w-16 h-16 text-orange-500" />,
      title: "Smart Homes and Access Control",
      description: "Comprehensive smart home systems combining convenience, security, and energy efficiency.",
      features: [
        "Automation Systems",
        "Energy Efficiency",
        "Safety and Security",
        "Device Integration"
      ]
    },
    {
      icon: <Shield className="w-16 h-16 text-orange-500" />,
      title: "Surveillance Systems",
      description: "Advanced surveillance solutions for residential and commercial spaces.",
      features: [
        "Advanced Cameras",
        "Storage Solutions",
        "Video Analytics",
        "Real-time Monitoring"
      ]
    },
    {
      icon: <Network className="w-16 h-16 text-orange-500" />,
      title: "Network Infrastructure",
      description: "Secure and scalable networks designed for businesses of all sizes.",
      features: [
        "Wired/Wireless Networks",
        "Data Center Solutions",
        "Network Security",
        "Cloud Integration"
      ]
    },
    {
      icon: <Lock className="w-16 h-16 text-orange-500" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection against evolving cyber threats.",
      features: [
        "Threat Detection",
        "Endpoint Security",
        "Access Management",
        "Data Protection"
      ]
    },
    {
      icon: <Server className="w-16 h-16 text-orange-500" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern business needs.",
      features: [
        "Cloud Migration",
        "Hybrid Cloud", 
        "Cloud Security",
        "Performance Optimization"
      ]
    }
  ];

  // Interactive card animation variants
  const cardVariants = {
    initial: { scale: 1, y: 0, rotateX: 0, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }
    }
  };
  
  // 3D card tilt effect
  const handleCardTilt = (e, index) => {
    if (!document.getElementById(`card-${index}`)) return;
    
    const card = document.getElementById(`card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const resetCardTilt = (index) => {
    if (!document.getElementById(`card-${index}`)) return;
    
    const card = document.getElementById(`card-${index}`);
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <main className="relative flex-grow overflow-hidden">
      {/* 3D Background container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/70 z-0" />
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-2xl rounded-2xl shadow-2xl p-12 mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-8"
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl text-gray-700 mb-16"
          >
            We offer a comprehensive range of technology solutions designed to meet the evolving needs of modern businesses and individuals.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={`card-${index}`}
                initial="initial"
                whileHover="hover"
                variants={cardVariants}
                onMouseMove={(e) => handleCardTilt(e, index)}
                onMouseLeave={() => resetCardTilt(index)}
                className="bg-gradient-to-br from-white/90 to-white/60 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform-gpu backdrop-blur-sm"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="p-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", delay: index * 0.1 }}
                    className="mb-6 transform transition-all duration-300"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <motion.h2 
                    className="text-2xl font-bold text-black mb-4"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-700 mb-6"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul 
                    className="space-y-2"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (featureIndex * 0.1) }}
                        className="flex items-center text-gray-700"
                      >
                        <motion.span 
                          className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                          animate={{ 
                            scale: [1, 1.5, 1],
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            delay: featureIndex * 0.5
                          }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-2xl shadow-2xl p-12 text-center transform-gpu overflow-hidden relative"
        >
          {/* Animated background bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -Math.random() * 100 - 50],
                  opacity: [0.1, 0.3, 0],
                  scale: [1, Math.random() * 0.5 + 1.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 5 + 5,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Need a Custom Solution?
            </motion.h2>
            
            <motion.p 
              className="text-2xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Let's discuss how we can help you achieve your technology goals.
            </motion.p>
            
            <motion.button 
              className="relative bg-white text-orange-500 px-10 py-4 rounded-lg text-xl font-bold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Us Today</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
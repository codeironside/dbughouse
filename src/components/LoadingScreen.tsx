import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function LoadingModel() {
  const meshRef = React.useRef();

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.5;
    }
  }, []);

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color={new THREE.Color("#ff6b00")}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
    >
      <div className="w-full h-[60vh]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <LoadingModel />
          <OrbitControls
            autoRotate
            autoRotateSpeed={5}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
      </div>
      <div className="text-white text-center">
        <h2 className="text-4xl font-bold mb-4">dbughouse</h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </motion.div>
  );
}
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth3D from './Earth3D';

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient overlay for better contrast with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars 
          radius={300} 
          depth={60} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade={true} 
        />
        <Earth3D />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.3} // Slower rotation
        />
      </Canvas>
    </div>
  );
}
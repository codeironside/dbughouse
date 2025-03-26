import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SpaceShip3D() {
  const shipRef = useRef();
  const engineGlowRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth floating motion
    if (shipRef.current) {
      shipRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      shipRef.current.rotation.z = Math.sin(time * 0.3) * 0.05;
    }
  });

  return (
    <group ref={shipRef}>
      {/* Main ship body */}
      <mesh>
        <capsuleGeometry args={[1, 2, 32, 16]} />
        <meshPhongMaterial
          color="#64748b"
          shininess={100}
          specular="#ffffff"
        />
      </mesh>

      {/* Cockpit */}
      <mesh position={[0, 0.5, 1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhongMaterial
          color="#7dd3fc"
          shininess={100}
          opacity={0.6}
          transparent
          specular="#ffffff"
        />
      </mesh>

      {/* Wings */}
      {[-1, 1].map((side) => (
        <group key={side} position={[side * 0.8, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.8, 0.1, 1.5]} />
            <meshPhongMaterial
              color="#475569"
              shininess={60}
              specular="#ffffff"
            />
          </mesh>
        </group>
      ))}

      {/* Engine exhausts */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <group key={i} position={[x, 0, -1]}>
          {/* Engine nozzle */}
          <mesh>
            <cylinderGeometry args={[0.2, 0.15, 0.3, 16]} />
            <meshPhongMaterial
              color="#334155"
              shininess={90}
              specular="#ffffff"
            />
          </mesh>
          
          {/* Engine glow */}
          <pointLight
            position={[0, 0, -0.2]}
            color="#60a5fa"
            intensity={1}
            distance={2}
          />
          
          {/* Exhaust trail */}
          <mesh>
            <coneGeometry args={[0.15, 1, 16]} />
            <meshBasicMaterial
              color="#60a5fa"
              transparent
              opacity={0.4}
            />
          </mesh>
        </group>
      ))}

      {/* Navigation lights */}
      <pointLight position={[-0.9, 0.2, 0.5]} color="#f472b6" intensity={0.5} distance={1} />
      <pointLight position={[0.9, 0.2, 0.5]} color="#f472b6" intensity={0.5} distance={1} />
      <pointLight position={[0, -0.2, 0.8]} color="#f472b6" intensity={0.5} distance={1} />
    </group>
  );
}
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Earth3D() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  const textures = useTexture({
    map: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=2048&q=80',
    normalMap: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2048&q=80',
  });

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005; // Even slower rotation
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          normalScale={new THREE.Vector2(0.85, 0.85)}
          shininess={5}
          transparent
          opacity={0.8} // Slightly more transparent
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh scale={[2.1, 2.1, 2.1]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          transparent={true}
          opacity={0.15} // Subtler glow
          color={new THREE.Color("#ff8c42")} // Orange glow matching theme
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Robot3D() {
  const robotRef = useRef();
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/robot-playground/model.gltf');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    robotRef.current.rotation.y = Math.sin(t / 4) / 4;
    robotRef.current.position.y = Math.sin(t / 1.5) / 2;
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={0.5}
      position={[2, 0, 0]}
    />
  );
}
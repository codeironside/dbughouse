import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const Earth3D: React.FC = () => {
  // Get viewport dimensions from the camera
  const { viewport } = useThree()
  // Compute Earth radius relative to viewport width
  const computedRadius = viewport.width / 3
  // Clamp the radius to a maximum (e.g., 10) to prevent oversizing in full-screen mode
  const radius = Math.min(computedRadius, 10)

  const earthRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>>(null)

  const [colorMap, bumpMap, specularMap] = useTexture([
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'
  ])

  // Ensure the color texture uses sRGB encoding
  if (colorMap) {
    colorMap.encoding = THREE.sRGBEncoding
  }

  // Rotate the Earth on every frame
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={earthRef}>
      {/* Use the dynamic (and clamped) radius */}
      <sphereGeometry args={[radius, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        // Scale bump relative to Earth size
        bumpScale={radius * 0.025}
        specularMap={specularMap}
        specular={new THREE.Color('grey')}
        shininess={5}
      />
    </mesh>
  )
}

export default Earth3D

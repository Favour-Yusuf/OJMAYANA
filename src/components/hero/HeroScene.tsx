"use client"

import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"

function AbstractForm() {
  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#111"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <AbstractForm />
    </Canvas>
  )
}

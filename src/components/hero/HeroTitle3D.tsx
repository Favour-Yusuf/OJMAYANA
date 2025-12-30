"use client"

import { Canvas } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

function Title() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(({ mouse }) => {
    if (!ref.current) return

    // VERY subtle mouse parallax (felt, not seen)
    ref.current.position.x = mouse.x * 0.15
    ref.current.position.y = mouse.y * 0.08
  })

  return (
    <Text
      ref={ref}
      fontSize={0.6}
letterSpacing={-0.02}

      lineHeight={1.1}
      textAlign="center"
      anchorX="center"
      anchorY="middle"
      position={[0, 0, 0]}
    >
      OJMAYANA STUDIOS{"\n"}STORIES THAT LAST
      <meshStandardMaterial
        color="#e5e5e5"
        roughness={0.8}
        metalness={0.1}
      />
    </Text>
  )
}

export default function HeroTitle3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 35 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 3]} intensity={1} />
      <Title />
    </Canvas>
  )
}

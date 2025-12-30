"use client"

import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { useScrollTimeline } from "./useScrollTimeline"

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function ImageFrame({
  url,
  index,
}: {
  url: string
  index: number
}) {
  const mesh = useRef<THREE.Mesh>(null!)
  const texture = useTexture(url)
  const t = useScrollTimeline()

  // Each image owns a scroll window
  const start = index * 0.1
  const end = start + 0.25

  const local = THREE.MathUtils.clamp(
    (t - start) / (end - start),
    0,
    1
  )

  useFrame(({ mouse }) => {
    if (!mesh.current) return

    // Depth storytelling
    mesh.current.position.z = lerp(6, -index * 1.5, local)
    mesh.current.position.y = lerp(-1, 0.6 - index * 0.15, local)

    // Subtle imperfection
    mesh.current.rotation.z = lerp(
      0.15 * (index % 2 ? 1 : -1),
      0,
      local
    )

    // Mouse parallax (very subtle)
    mesh.current.position.x = lerp(
      mesh.current.position.x,
      mouse.x * 0.2,
      0.05
    )

    // Opacity fade
    ;(mesh.current.material as THREE.MeshStandardMaterial).opacity =
      local
  })

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[3.6, 2.3]} />
      <meshStandardMaterial
        map={texture}
        transparent
        roughness={0.9}
        metalness={0}
      />
    </mesh>
  )
}

export default function ScrollImages() {
    const images = [
    "https://res.cloudinary.com/defbalxci/image/upload/v1765903286/DSC08376-Edit_sohnf7.jpg",
    "https://res.cloudinary.com/defbalxci/image/upload/v1765903242/DSC01483_xnusrn.jpg",
    "https://res.cloudinary.com/defbalxci/image/upload/v1765903807/Artboard_4_zk3lz7.jpg",
    "https://res.cloudinary.com/defbalxci/image/upload/v1765903958/FEMALE_ARTISTE0059_qlvvbb.jpg",
    "https://res.cloudinary.com/defbalxci/image/upload/v1765903935/DSC09392_jsbmhg.jpg",
    // "/images/6.jpg",
    // "/images/7.jpg",
  ]


  return (
    <>
      {images.map((img, i) => (
        <ImageFrame key={i} url={img} index={i} />
      ))}
    </>
  )
}

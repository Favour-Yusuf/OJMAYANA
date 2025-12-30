"use client"

import { Canvas } from "@react-three/fiber"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"


export default function HeroCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
         <EffectComposer>
  <DepthOfField
    focusDistance={0.02}
    focalLength={0.04}
    bokehScale={3}
  />
</EffectComposer>
        {children}
      </Canvas>
     

    </div>
  )
}

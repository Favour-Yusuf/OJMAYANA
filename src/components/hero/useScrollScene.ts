"use client"

import { useEffect, useState } from "react"

export function useScrollScene(totalScenes: number) {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const max = document.body.scrollHeight - window.innerHeight
      const progress = scrollTop / max
      const current = Math.floor(progress * totalScenes)
      setScene(current)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [totalScenes])

  return scene
}

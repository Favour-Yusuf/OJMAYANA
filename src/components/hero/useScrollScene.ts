"use client"

import { useEffect, useState } from "react"

export function useScrollScene(
  containerRef: React.RefObject<HTMLElement>,
  totalScenes: number
) {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Total scrollable distance INSIDE sticky section
      const scrollable = containerRef.current.offsetHeight - viewportHeight

      if (scrollable <= 0) return

      // How far we've scrolled INTO the section
      const progress = Math.min(
        Math.max(-rect.top, 0),
        scrollable
      )

      // Normalize to [0, totalScenes - 1]
      const sceneIndex = Math.round(
        (progress / scrollable) * (totalScenes - 1)
      )

      setScene(sceneIndex)
    }

    window.addEventListener("scroll", onScroll)
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [containerRef, totalScenes])

  return scene
}

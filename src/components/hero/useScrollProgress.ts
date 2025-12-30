"use client"

import { useEffect, useState } from "react"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      setProgress(scrollTop / height)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return progress
}

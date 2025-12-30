"use client"

import { useEffect, useState } from "react"

export function useScrollTimeline() {
  const [t, setT] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const max = document.body.scrollHeight - window.innerHeight
      setT(scrollTop / max)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return t
}

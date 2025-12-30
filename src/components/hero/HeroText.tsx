"use client"

import { useScrollTimeline } from "./useScrollTimeline"

function Chapter({
  start,
  end,
  children,
}: {
  start: number
  end: number
  children: React.ReactNode
}) {
  const t = useScrollTimeline()
  const visible = t > start && t < end

  return (
    <div
      className={`absolute transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

export default function HeroText() {
  return (
    <div className="relative h-full text-white">
      <Chapter start={0} end={0.18}>
        <h1 className="text-5xl md:text-6xl font-light">
          We document stories<br />that demand attention.
        </h1>
      </Chapter>

      <Chapter start={0.2} end={0.35}>
        <p className="text-xl text-white/70">
          Not staged.<br />Not rushed.
        </p>
      </Chapter>

      <Chapter start={0.38} end={0.55}>
        <p className="text-xl text-white/70">
          People before polish.
        </p>
      </Chapter>

      <Chapter start={0.6} end={0.8}>
        <p className="text-xl text-white/70">
          Moments as they are.
        </p>
      </Chapter>
    </div>
  )
}

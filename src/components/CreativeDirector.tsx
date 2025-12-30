"use client"

import { useReveal } from "./useReveal"

export default function CreativeDirector() {
  const { ref, visible } = useReveal()

  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
          From the Creative Director
        </p>

        <h2 className="mb-10 text-3xl md:text-5xl font-light leading-tight">
          OJMAYANA Studios is where creative people grow by doing
          bold, high-quality work that gets noticed —
          and builds long-term value.
        </h2>

        <p className="max-w-3xl text-lg text-white/70 leading-relaxed">
          We believe storytelling should do more than look good.
          It should build trust, shape perception, and move brands
          closer to the future they’re trying to create.
        </p>

        <p className="mt-8 text-sm text-white/60">
          — OJ Mayana, Creative Director
        </p>
      </div>
    </section>
  )
}

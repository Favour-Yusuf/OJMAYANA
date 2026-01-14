"use client"

import { useReveal } from "./useReveal"

export default function PrimaryCTA() {
  const { ref, visible } = useReveal()

  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48 border-t border-white/10">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="mb-10 text-4xl md:text-6xl font-light leading-tight">
          Ready to tell your story
          <br />
          the right way?
        </h2>

        <p className="mb-16 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
          Whether you’re building a brand, launching a product,
          or repositioning your business —
          we’re ready to help you do it with intention.
        </p>

        <a
          href="/contact"
          className="inline-block border text-[#dfaa26] px-10 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Start a Project
        </a>
      </div>
    </section>
  )
}

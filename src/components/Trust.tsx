"use client"

import { useReveal } from "./useReveal"

const testimonials = [
  {
    quote:
      "Working with OJMAYANA Studios completely changed how our brand is perceived. The visuals finally matched the quality of what we offer.",
    name: "Brand Lead",
    company: "Fashion Brand",
  },
  {
    quote:
      "They didn’t just take pictures. They understood our business and told our story in a way customers could trust.",
    name: "Founder",
    company: "Growing SME",
  },
]

const clients = [
  "Fashion Brands",
  "SMEs",
  "Corporate Teams",
  "Creative Founders",
  "Media Platforms",
]

export default function Trust() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <Intro />

        {/* Clients */}
        <Clients />

        {/* Testimonials */}
        <Testimonials />

      </div>
    </section>
  )
}

/* ----------------- */
/* Intro             */
/* ----------------- */

function Intro() {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`mb-24 max-w-4xl transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
        Trusted by
      </p>

      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
        Brands that value
        <br />
        quality and clarity.
      </h2>
    </div>
  )
}

/* ----------------- */
/* Clients           */
/* ----------------- */

function Clients() {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`mb-32 transition-all duration-700 delay-100 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-white/60">
        {clients.map((client, i) => (
          <div
            key={i}
            className="border border-[#dfaa26]/50 px-6 py-8 text-center text-sm uppercase tracking-wide"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ----------------- */
/* Testimonials      */
/* ----------------- */

function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      {testimonials.map((item, i) => (
        <Testimonial key={i} {...item} />
      ))}
    </div>
  )
}

function Testimonial({
  quote,
  name,
  company,
}: {
  quote: string
  name: string
  company: string
}) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`max-w-xl transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="mb-8 text-xl md:text-2xl font-light leading-relaxed">
        “{quote}”
      </p>

      <p className="text-sm text-[#dfaa26]/60">
        {name} — {company}
      </p>
    </div>
  )
}

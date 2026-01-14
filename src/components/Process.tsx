"use client"

import { useReveal } from "./useReveal"

const steps = [
  {
    number: "01",
    title: "Understand the Story",
    description:
      "We start by understanding your brand, your audience, and what success actually looks like for your business.",
  },
  {
    number: "02",
    title: "Shape the Narrative",
    description:
      "We translate strategy into a clear visual direction — deciding what to show, what to say, and what to leave unsaid.",
  },
  {
    number: "03",
    title: "Create With Intention",
    description:
      "Photography and film are produced with purpose. Every frame serves the story and the outcome.",
  },
  {
    number: "04",
    title: "Deliver for Growth",
    description:
      "Final visuals are delivered ready to perform — across websites, campaigns, and platforms that move your business forward.",
  },
]

export default function Process() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <div className="mb-32 max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            How we work
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
            A clear process.
            <br />
            Built for serious brands.
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Step number */}
      <div className="md:col-span-2">
        <span className="text-sm text-[#dfaa26]/60">{number}</span>
      </div>

      {/* Content */}
      <div className="md:col-span-10">
        <h3 className="mb-6 text-2xl md:text-3xl font-light">
          {title}
        </h3>

        <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

const pillars = [
  {
    title: "Brand Presence",
    description:
      "We help brands establish a clear, credible visual identity that builds trust and consistency across all touchpoints.",
  },
  {
    title: "Product & Campaign Performance",
    description:
      "High-quality visuals designed to support launches, campaigns, and sales — especially for fashion, e-commerce, and product-driven brands.",
  },
  {
    title: "Documentary & Corporate Storytelling",
    description:
      "Authentic, unscripted storytelling that captures people, processes, and culture — helping businesses communicate with honesty and authority.",
  },
]

export default function ServicePillars() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            What we focus on
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-tight text-white/85">
            Three ways we support brand growth through visual storytelling.
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group space-y-8"
            >
              {/* Index */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#dfaa26] font-mono">
                  0{i + 1}
                </span>
                <span className="h-px w-12 bg-white/20 group-hover:bg-[#dfaa26] transition" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-white/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

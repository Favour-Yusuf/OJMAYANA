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
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
        {pillars.map((pillar, i) => (
          <div key={i} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light">
              {pillar.title}
            </h3>
            <p className="text-lg text-white/70 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

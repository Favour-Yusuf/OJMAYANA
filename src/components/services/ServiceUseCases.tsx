const useCases = [
  {
    title: "Launching or repositioning a brand",
    description:
      "When a business needs to introduce itself clearly—or change how it’s perceived—we help define a visual direction that builds credibility from day one.",
  },
  {
    title: "Preparing for campaigns or growth phases",
    description:
      "From fashion launches to product rollouts, we create visuals designed to support campaigns, marketing assets, and sales conversations.",
  },
  {
    title: "Documenting people, culture, and process",
    description:
      "For companies that want to communicate authenticity, we capture real moments—teams at work, events, and stories that build long-term trust.",
  },
  {
    title: "Improving brand perception",
    description:
      "When existing visuals no longer reflect where a business is headed, we help elevate presentation to match ambition and opportunity.",
  },
]

export default function ServiceUseCases() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            When clients come to us
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-white/85">
            Clear moments where visual storytelling becomes essential.
          </h2>
        </div>

        {/* Use cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {useCases.map((item, i) => (
            <div key={i} className="space-y-6">

              {/* Index + accent */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-white/40">
                  0{i + 1}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

const services = [
  {
    category: "Photography",
    items: [
      "Fashion & E-commerce Photography",
      "Product Photography",
      "Portrait & Lifestyle Photography",
      "Corporate Event Coverage",
      "Documentary Photography",
      "Food Photography",
      "Pre-wedding Photography",
    ],
  },
  {
    category: "Videography",
    items: [
      "Fashion & E-commerce Campaign Videos",
      "Corporate Event Coverage",
      "Interviews & Personal Branding",
      "Podcasts & YouTube Content",
      "Mini Influencer Campaign Videos",
      "Video Editing Services",
    ],
  },
  {
    category: "Branding Support",
    items: [
      "Visual Direction for Startups",
      "Brand Asset Creation",
      "Campaign Visual Strategy",
    ],
  },
]

export default function ServiceBreakdown() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            Service breakdown
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-white/85">
            Capabilities designed to support different stages of growth.
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {services.map((group, i) => (
            <div key={i} className="group space-y-10">

              {/* Category header */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-white/40">
                    0{i + 1}
                  </span>
                  <span className="h-px w-12 bg-white/20 group-hover:bg-[#dfaa26] transition" />
                </div>

                <p className="text-xl md:text-2xl font-light">
                  {group.category}
                </p>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-white/70 leading-relaxed transition hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

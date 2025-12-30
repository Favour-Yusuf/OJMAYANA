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
    <section className="bg-black text-white px-6 md:px-20 py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
        {services.map((group, i) => (
          <div key={i}>
            <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
              {group.category}
            </p>

            <ul className="space-y-4 text-white/70">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

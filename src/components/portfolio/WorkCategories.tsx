const categories = [
  "Fashion",
  "Documentary",
  "Corporate",
  "Product",
  "Lifestyle",
]

export default function WorkCategories() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="mb-12 text-xs uppercase tracking-widest text-white/50">
          Explore by category
        </p>

        <ul className="space-y-8 text-2xl md:text-3xl font-light">
          {categories.map((category, i) => (
            <li key={i} className="hover:text-white/60 transition">
              <a href={`/portfolio/${category.toLowerCase()}`}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const beliefs = [
  "Storytelling should build trust, not noise.",
  "Great visuals are useless without intention.",
  "Perception shapes opportunity.",
  "African brands deserve world-class presentation.",
]

export default function Beliefs() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="mb-12 text-xs uppercase tracking-widest text-white/50">
          What we believe
        </p>

        <ul className="space-y-10 text-2xl md:text-3xl font-light">
          {beliefs.map((belief, i) => (
            <li key={i} className="text-white/80">
              {belief}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

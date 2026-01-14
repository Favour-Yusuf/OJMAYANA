const beliefs = [
  "Storytelling should build trust, not noise.",
  "Great visuals are useless without intention.",
  "Perception shapes opportunity.",
  "African brands deserve world-class presentation.",
]

export default function Beliefs() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-[#dfaa26]/50">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="mb-20 text-xs uppercase tracking-widest text-white/50">
          What we believe
        </p>

        {/* Beliefs */}
        <ul className="space-y-16">
          {beliefs.map((belief, i) => (
            <li
              key={i}
              className="group flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Index */}
              <span className="text-sm text-[#dfaa26] font-mono">
                0{i + 1}
              </span>

              {/* Statement */}
              <p className="text-3xl md:text-4xl font-light leading-tight text-white/80 group-hover:text-white transition">
                {belief}
              </p>

              {/* Accent line */}
              <span className="hidden md:block ml-auto mt-3 h-px w-24 bg-white/20 group-hover:bg-[#dfaa26] transition" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

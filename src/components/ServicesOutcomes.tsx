"use client"

export default function ServicesOutcomes() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <div className="mb-24 max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            What we do
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            We don’t just create visuals.
            <br />
            We help brands grow into something bigger.
          </h2>
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Outcome 1 */}
          <Outcome
            number="01"
            title="Build Trust"
            description="We help your brand look credible, consistent, and professional —
            so customers feel confident choosing you."
          />

          {/* Outcome 2 */}
          <Outcome
            number="02"
            title="Shape Perception"
            description="Through photography and film, we control how your brand is seen,
            remembered, and talked about."
          />

          {/* Outcome 3 */}
          <Outcome
            number="03"
            title="Tell Real Stories"
            description="Not staged. Not rushed. We document real people, real processes,
            and real moments that audiences connect with."
          />

          {/* Outcome 4 */}
          <Outcome
            number="04"
            title="Drive Growth"
            description="Our work is designed to convert —
            helping SMEs attract better customers, partners, and opportunities."
          />

        </div>
      </div>
    </section>
  )
}

/* ----------------- */
/* Outcome Block     */
/* ----------------- */

function Outcome({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="space-y-6">
      <span className="text-sm text-[#dfaa26]/60">{number}</span>

      <h3 className="text-2xl md:text-3xl font-light">
        {title}
      </h3>

      <p className="max-w-md text-lg text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

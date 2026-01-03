import Link from "next/link"

export default function ProjectCTA() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 text-center border-t border-white/10">
      <div className="max-w-4xl mx-auto">

        <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
          Interested in something similar?
        </p>

        <h2 className="mb-10 text-4xl md:text-5xl font-light leading-tight">
          Let’s create something worth remembering.
        </h2>

        <div className="mx-auto mb-12 h-px w-20 bg-[#dfaa26]" />

        <Link
          href="/contact"
          className="inline-flex items-center gap-4 border border-white px-12 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Start a project
          <span>→</span>
        </Link>

      </div>
    </section>
  )
}

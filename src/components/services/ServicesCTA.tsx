import Link from "next/link"

export default function ServicesCTA() {
  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-40 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
          Next steps
        </p>

        {/* Headline */}
        <h2 className="mb-10 text-4xl md:text-6xl font-bold leading-tight">
          Not sure what you need yet?
          <br />
          Let’s figure it out together.
        </h2>

        {/* Gold divider */}
        <div className="mx-auto mb-12 h-px w-20 bg-[#dfaa26]" />

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 border text-[#dfaa26] border-[#dfaa26] px-12 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Start a conversation
          <span className="text-lg leading-none">→</span>
        </Link>

        {/* Micro reassurance */}
        <p className="mt-8 text-sm text-white/50">
          No pressure. No commitment. Just clarity.
        </p>

      </div>
    </section>
  )
}

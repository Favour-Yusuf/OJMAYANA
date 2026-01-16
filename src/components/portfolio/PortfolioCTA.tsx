export default function PortfolioCTA() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-40 text-center border-t border-white/10">
      <h2 className="mb-10 text-4xl md:text-6xl font-bold">
        Like what you see?
        <br />
        Let’s create something meaningful.
      </h2>

      <a
        href="/contact"
        className="inline-block border text-[#dfaa26] px-10 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
      >
        Start a Project
      </a>
    </section>
  )
}

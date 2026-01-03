export default function CreativeDirector() {
  return (
    <section className="bg-black  px-6 md:px-20 py-40 border-t border-[#dfaa26]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-center">

        {/* Left rail */}
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-white/50">
            From the Creative Director
          </p>

          {/* Subtle accent */}
          <div className="mt-8 h-px w-16 bg-[#dfaa26]" />
        </div>

        {/* Message */}
        <div className="md:col-span-8 space-y-10">

          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/85">
            OJMAYANA Studios is where creative people grow by doing bold,
            high-quality work that gets noticed — and builds their reputation,
            income, and skill set for the long term.
          </p>

          <p className="max-w-2xl text-lg text-white/65 leading-relaxed">
            We don’t chase trends or shortcuts. We focus on clarity, intention,
            and work that stands the test of time — because the goal isn’t just
            to look good today, but to matter tomorrow.
          </p>

          <div className="pt-6  text-[#dfaa26]">
            <p className="text-lg font-light">
              OJ Mayana
            </p>
            <p className="text-sm">
              Creative Director
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

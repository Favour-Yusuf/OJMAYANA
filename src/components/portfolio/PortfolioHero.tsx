import Image from "next/image"

export default function PortfolioHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/defbalxci/image/upload/v1765903444/Artboard_9_ktoauo.jpg" // replace with your image
          alt="Selected projects by OJMAYANA Studios"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-40">
        <div className="max-w-5xl">

          {/* Eyebrow with gold accent */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#dfaa26]" />
            <p className="text-xs uppercase tracking-widest text-white/60">
              Portfolio
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selected projects.
            <br />
            Built with intention.
          </h1>

        </div>
      </div>

    </section>
  )
}

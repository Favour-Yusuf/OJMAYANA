import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/defbalxci/image/upload/v1765903075/DSC09988_rhaxan.jpg" // change to your image
          alt="Visual storytelling services by OJMAYANA Studios"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-40">
        <div className="max-w-5xl">

          {/* Section label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#dfaa26]" />
            <p className="text-xs uppercase tracking-widest text-white/60">
              Services
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Visual storytelling services
            <br />
            built to support growth.
          </h1>

        </div>
      </div>

    </section>
  )
}

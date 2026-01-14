import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/defbalxci/image/upload/v1765903086/DSC09999_sg0qzf.jpg" // <-- change to your image path
          alt="Behind the scenes at OJMAYANA Studios"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-40">
        <div className="max-w-5xl">

          {/* Label */}
          <p className="mb-6 text-xs uppercase tracking-widest text-white/60">
            About OJMAYANA Studios
          </p>

          {/* Headline */}
          <h1 className="text-4xl font-serif md:text-6xl font-light leading-tight">
            We are a creative documentary studio
            <br />
            building trust through storytelling.
          </h1>

        </div>
      </div>

    </section>
  )
}

import Image from "next/image"

type ProjectHeroProps = {
  title: string
  category: string
  coverImage: string
}

export default function ProjectHero({
  title,
  category,
  coverImage,
}: ProjectHeroProps) {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          // unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-48">
        <div className="max-w-4xl">

          {/* Category */}
          <p className="mb-6 text-xs uppercase tracking-widest text-white/60">
            {category}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            {title}
          </h1>

        </div>
      </div>

    </section>
  )
}

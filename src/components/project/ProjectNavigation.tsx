import Link from "next/link"
import Image from "next/image"
import { Project } from "@/components/data/projects"

type Props = {
  prev?: Project
  next?: Project
}

export default function ProjectNavigation({ prev, next }: Props) {
  if (!prev && !next) return null

  return (
    <section className="bg-black px-6 md:px-20 py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Previous */}
        {prev && (
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group block"
          >
            <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
              Previous project
            </p>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={prev.coverImage}
                alt={prev.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            <h3 className="mt-6 text-xl font-light group-hover:text-[#dfaa26] transition">
              {prev.title}
            </h3>
            <p className="mt-1 text-sm text-white/50">
              {prev.category}
            </p>
          </Link>
        )}

        {/* Next */}
        {next && (
          <Link
            href={`/portfolio/${next.slug}`}
            className="group block md:text-right"
          >
            <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
              Next project
            </p>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={next.coverImage}
                alt={next.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            <h3 className="mt-6 text-xl font-light group-hover:text-[#dfaa26] transition">
              {next.title}
            </h3>
            <p className="mt-1 text-sm text-white/50">
              {next.category}
            </p>
          </Link>
        )}

      </div>
    </section>
  )
}

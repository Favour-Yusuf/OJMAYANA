import Link from "next/link"
import Image from "next/image"
import { projects } from "../data/projects"

export default function PortfolioGrid() {
  return (
    <section className="bg-black text-white px-6 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group"
            >
              {/* Image */}
              <div className="relative w-full h-[70vh] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Meta */}
              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  {project.category}
                </p>
                <h2 className="text-2xl md:text-3xl font-light">
                  {project.title}
                </h2>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

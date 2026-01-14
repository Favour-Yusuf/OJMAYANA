"use client"

import { useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { projects } from "../data/projects"

const categories = [
  "all",
  "fashion",
  "portrait",
  "event",
  "product",
  "corporate",
  "lifestyle",
  "culture",
  "food",
  "interior",
   "video",
   "art"
]

export default function PortfolioGrid() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const active = searchParams.get("category") || "all"

 const filteredProjects = useMemo(() => {
  if (active === "all") return projects

  if (active === "video") {
    return projects.filter((project) =>
      project.media.some((m) => m.type === "video")
    )
  }

  return projects.filter((project) =>
    project.category.toLowerCase().includes(active)
  )
}, [active])


  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <section className="bg-black text-white px-6 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto">

        {/* Sticky Category Filter */}
        <div className="sticky top-24 z-30 bg-black/80 backdrop-blur py-6 mb-20 border-b border-white/10">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategory(category)}
                className={`relative text-xs uppercase tracking-widest transition ${
                  active === category
                    ? "text-[#dfaa26]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {category}

                {active === category && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-[#dfaa26]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block animate-fadeIn"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-black">
  {project.media[0].type === "video" ? (
    <video
      src={project.media[0].src}
      poster={project.media[0].poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <Image
      src={project.coverImage}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  )}
</div>


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

        {filteredProjects.length === 0 && (
          <p className="mt-32 text-center text-white/50">
            No projects found for this category.
          </p>
        )}

      </div>
    </section>
  )
}

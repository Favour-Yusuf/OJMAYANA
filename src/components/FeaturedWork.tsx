"use client"

import Link from "next/link"

const works = [
  {
    title: "Fashion Campaign",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903242/DSC01483_xnusrn.jpg",
    category:"fashion"
  },
  // {
  //   title: "Portraits",
  //   src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903935/DSC09392_jsbmhg.jpg",
  //   category:"portrait"
  // },
   {
    title: "Portrait",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903958/FEMALE_ARTISTE0059_qlvvbb.jpg",
    category:"portrait"
  },
  
 
  {
    title: "Product Photography",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903837/DSC06340-14_jblqby.jpg",
    category:"product"
  },
  {
    title: "Events",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903075/DSC09988_rhaxan.jpg",
    category:"event"
  },
  {
    title: "Lifestyle",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903759/DSC01376_pqqtry.jpg",
    category:"lifestyle"
  },
  {
    title: "Food Photography",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768299971/OJM09720_aa6uje.jpg",
    category:"food"
  },
  {
    title: "Art Photography",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903460/DSC02092_xudljt.jpg",
    category:"art"
  },
  {
    title: "Corporate",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903441/Artboard_8_pykwhp.jpg",
    category:"corporate"
  },
]

export default function FeaturedWork() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-28 md:py-40">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-hev uppercase tracking-widest text-white/50">
            Selected work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            A few stories we’ve told.
          </h2>
        </div>

        {/* Instagram-style Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
  {works.map((work, i) => (
    <WorkItem key={i} {...work} />
  ))}
</div>


        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="mb-6 text-white/60 text-xs uppercase tracking-widest">
            Want to see more?
          </p>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 border border-[#dfaa26] px-10 py-4 text-xs uppercase tracking-widest text-[#dfaa26]
                       transition hover:bg-[#dfaa26] hover:text-black"
          >
            View Full Portfolio →
          </Link>
        </div>

      </div>
    </section>
  )
}

/* ----------------------------- */
/* Work Item                     */
/* ----------------------------- */

function WorkItem({
  src,
  title,
  category,
}: {
  src: string
  title: string
  category: string
}) {
  return (
    <div className="mb-3 md:mb-4 break-inside-avoid group">
      <Link
      href={`/portfolio?category=${category}`}
      className="mb-3 md:mb-4 break-inside-avoid group block"
    >
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition" />
      </div>

      <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
        {title}
      </p>
      </Link>
    </div>
  )
}

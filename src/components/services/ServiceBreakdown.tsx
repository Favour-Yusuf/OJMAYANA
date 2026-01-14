import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Photography",
    portfolioCategories: [
      "fashion",
      "portrait",
      "product",
      "food",
      "event",
      "documentary",
    ],
    image:
      "https://res.cloudinary.com/defbalxci/image/upload/v1765903954/DSC03009_dt1mq6.jpg",
    items: [
      "Fashion & E-commerce",
      "Portrait & Lifestyle",
      "Product & Food",
      "Events & Documentary",
    ],
  },
  {
    title: "Videography",
    portfolioCategories: [
      "event",
      "culture",
      "campaign",
      "corporate",
    ],
    video:
      "https://res.cloudinary.com/defbalxci/video/upload/v1768382587/Video_Compressor___Reduce_Video_File_Size_Online_wamjnj.mp4",
    items: [
      "Campaign Films",
      "Corporate & Event Coverage",
      "Personal Branding",
      "Editing & Post-production",
    ],
  },
  {
    title: "Branding Support",
    portfolioCategories: [
      "fashion",
      "product",
      "campaign",
    ],
    image:
      "https://res.cloudinary.com/defbalxci/image/upload/v1767425715/DSC05855_kbtibb.jpg",
    items: [
      "Visual Direction",
      "Campaign Strategy",
      "Brand Asset Creation",
    ],
  },
]


export default function ServiceBreakdown() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-white/85">
            Visual capabilities built around real brand needs.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, i) => (
           <Link
  key={i}
  href={`/portfolio?categories=${service.portfolioCategories.join(",")}`}
  className="group block"
>

              {/* Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
  {"video" in service ? (
    <video
      src={service.video}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
    />
  ) : (
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
    />
  )}

  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />
</div>

              {/* Content */}
              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-light flex items-center justify-between">
                  {service.title}
                  <span className="text-[#dfaa26] opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </h3>

                <ul className="space-y-2 text-white/70 text-sm">
                  {service.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

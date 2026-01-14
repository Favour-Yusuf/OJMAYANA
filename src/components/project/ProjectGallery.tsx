import Image from "next/image"

type ProjectMedia = {
  type: "image" | "video"
  src: string
  layout: "portrait" | "landscape"
  poster?: string
}

type ProjectGalleryProps = {
  media: ProjectMedia[]
}

export default function ProjectGallery({ media }: ProjectGalleryProps) {
  return (
    <section className="bg-black px-6 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Masonry Grid */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            auto-rows-[220px]
            gap-4
          "
        >
          {media.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${
                item.layout === "portrait"
                  ? "row-span-2"
                  : "col-span-2 row-span-2"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

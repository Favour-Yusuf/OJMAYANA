import Image from "next/image"

type ProjectImage = {
  src: string
  layout: "portrait" | "landscape"
}

type ProjectGalleryProps = {
  images: ProjectImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="bg-black px-6 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Grid */}
        <div
          className="
            grid 
            grid-cols-2 
            md:grid-cols-4 
            auto-rows-[220px] 
            gap-4
          "
        >
          {images.map((image, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${
                image.layout === "portrait"
                  ? "row-span-2"
                  : "col-span-2 row-span-2"
              }`}
            >
              <Image
                src={image.src}
                alt="images"
                fill
                // unoptimized
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

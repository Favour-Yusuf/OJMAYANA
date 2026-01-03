import Image from "next/image"

type ProjectGalleryProps = {
  images: string[]
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <section className="bg-black px-6 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto space-y-32">

        {images.map((src, i) => (
          <div
            key={i}
            className={`relative w-full ${
              i % 2 === 0 ? "h-[80vh]" : "h-[65vh]"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        ))}

      </div>
    </section>
  )
}

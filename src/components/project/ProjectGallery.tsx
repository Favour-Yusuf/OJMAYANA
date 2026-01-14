import Image from "next/image"

type ProjectMedia =
  | {
      type: "image"
      src: string
      layout: "portrait" | "landscape"
    }
  | {
      type: "video"
      src: string
      poster?: string
    }

type ProjectGalleryProps = {
  media: ProjectMedia[]
}


export default function ProjectGallery({ media }: ProjectGalleryProps) {
  return (
    <section className="bg-black px-6 md:px-20 pb-40">
      <div className="max-w-6xl mx-auto space-y-32">

        {media.map((item, i) => {
          if (item.type === "video") {
            return (
              <div
                key={i}
                className="relative w-full aspect-[16/9] overflow-hidden"
              >
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
              </div>
            )
          }

          // image
          return (
            <div
              key={i}
              className={`relative overflow-hidden mx-auto ${
                item.layout === "landscape"
                  ? "w-full aspect-[16/9]"
                  : "w-full max-w-3xl aspect-[4/5]"
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes={
                  item.layout === "landscape"
                    ? "(max-width: 768px) 100vw, 80vw"
                    : "(max-width: 768px) 100vw, 600px"
                }
                className="object-cover"
              />
            </div>
          )
        })}

      </div>
    </section>
  )
}

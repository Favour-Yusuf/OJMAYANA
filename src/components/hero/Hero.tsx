"use client"

import { useScrollScene } from "./useScrollScene"

const slides = [
  {
    text: "OJMAYANA STUDIOS",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903258/DSC08167-Edit_govxav.jpg",
  },
  {
    text: "STORIES THAT LAST",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903243/DSC01488_h3mtza.jpg",
  },
  {
    text: "NOT STAGED.\nNOT RUSHED.",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903284/DSC08305-Edit_enctsy.jpg",
  },
  {
    text: "ELEVATING WHAT COMES FROM AFRICA",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903243/DSC01488_h3mtza.jpg",
  },
  {
    text: "STORIES THAT CONVERT",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903807/Artboard_4_zk3lz7.jpg",
  },
]

export default function Hero() {
  const scene = useScrollScene(slides.length)

  return (
    <section className="relative h-[500vh] bg-black text-white">
      <div className="sticky top-0 h-screen w-screen overflow-hidden">

        {/* Background images */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              scene === i ? "opacity-100" : "opacity-0"
            }`}
            alt=""
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Text slider */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-20">
          <h1 className="max-w-6xl text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
            {slides.map((slide, i) => (
              <span
                key={i}
                className={`absolute transition-all duration-700 ${
                  scene === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.text}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}

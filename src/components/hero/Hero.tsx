"use client"

import { useRef } from "react"
import { useScrollScene } from "./useScrollScene"

const slides = [
  {
    text: "Fashion Campaigns",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903284/DSC08305-Edit_enctsy.jpg",
  },
  {
    text: "Portrait & Lifestyle",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903807/Artboard_4_zk3lz7.jpg",
  },
  {
    text: "Food Photography",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1768302908/OJM01640_qd0oxx.jpg",
  },
  {
    text: "Events",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1768295287/AYRA-STAR_LISTENING_PARTY-52_qaewt6.jpg",
  },
  {
    text: "Interiors & Spaces",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1768303182/DSC00097_nq2zah.jpg",
  },
  {
    text: "Products",
    image: "https://res.cloudinary.com/defbalxci/image/upload/v1765903934/DSC06334-12_j97ds4.jpg",
  },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null!)
  const scene = useScrollScene(sectionRef, slides.length)

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden">

        {/* Background images */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.text}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              scene === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Text */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-20">
          <h1 className="max-w-6xl text-4xl md:text-6xl lg:text-7xl font-light leading-tight uppercase tracking-wide">
            {slides.map((slide, i) => (
              <span
                key={i}
                className={`absolute transition-all duration-700 ${
                  scene === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
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

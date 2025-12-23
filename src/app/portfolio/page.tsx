"use client"

import Image from "next/image";
import { useState } from "react";

type MediaItem = {
  type: "photo" | "video";
  title: string;
  src: string; // Cloudinary URL for photos, YouTube embed URL for videos
  poster?: string; // For videos, thumbnail image
};

const photography: MediaItem[] = [
  {
    type: "photo",
    title: "Fashion Campaign",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg",
  },
  {
    type: "photo",
    title: "Product Photography",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg",
  },
  {
    type: "photo",
    title: "Portrait & Lifestyle",
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg",
  },
];

const videography: MediaItem[] = [
  {
    type: "video",
    title: "Fashion Video Campaign",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg",
  },
  {
    type: "video",
    title: "Corporate Event Coverage",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg",
  },
];

export default function PortfolioPage() {
  const [category, setCategory] = useState<"photography" | "videography">(
    "photography"
  );
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const items = category === "photography" ? photography : videography;

  return (
    <main className="pt-24 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-24 pb-24">
        <h1 className="text-[10vw] md:text-[6rem] font-light leading-[1]">
          Portfolio
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-white/70">
          Explore our photography and videography work — crafted with intention,
          style, and storytelling depth.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="px-6 md:px-24 pb-16 flex gap-6">
        <button
          className={`text-lg font-light uppercase tracking-widest pb-1 ${
            category === "photography"
              ? "border-b border-[#dfaa26]"
              : "text-white/50"
          }`}
          onClick={() => setCategory("photography")}
        >
          Photography
        </button>
        <button
          className={`text-lg font-light uppercase tracking-widest pb-1 ${
            category === "videography"
              ? "border-b border-[#dfaa26]"
              : "text-white/50"
          }`}
          onClick={() => setCategory("videography")}
        >
          Videography
        </button>
      </section>

      {/* Media Grid */}
      <section className="px-6 md:px-24 pb-56 grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="relative group cursor-pointer">
            {item.type === "photo" ? (
              <Image
                src={item.src}
                alt={item.title}
                width={1600}
                height={1000}
                className="w-full object-cover"
              />
            ) : (
              <div
                className="relative"
                onClick={() => setModalVideo(item.src)}
              >
                <Image
                  src={item.poster!}
                  alt={item.title}
                  width={1600}
                  height={1000}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <div className="text-white text-4xl">▶</div>
                </div>
              </div>
            )}
            <p className="mt-4 text-sm uppercase tracking-widest text-white/70">
              {item.title}
            </p>
          </div>
        ))}
      </section>

      {/* Video Modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
          onClick={() => setModalVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src={modalVideo}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light"
            onClick={() => setModalVideo(null)}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}

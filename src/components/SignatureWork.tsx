"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const works = [
  {
    title: "Fashion Campaigns",
    image:
      "https://res.cloudinary.com/defbalxci/image/upload/v1765903286/DSC08376-Edit_sohnf7.jpg",
  },
  {
    title: "Brand Portraiture",
    image:
      "https://res.cloudinary.com/defbalxci/image/upload/v1765903954/DSC03009_dt1mq6.jpg",
  },
  {
    title: "Motion Narratives",
    image:
      "https://res.cloudinary.com/defbalxci/image/upload/v1765903437/Artboard_5_qnxesq.jpg",
  },
];

export default function SignatureWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-24 py-40 bg-black">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        {/* Titles */}
        <div className="md:col-span-4 space-y-6">
          {works.map((work, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`block text-left text-2xl md:text-3xl font-light transition-opacity ${
                active === i ? "opacity-100" : "opacity-40"
              }`}
            >
              {work.title}
            </button>
          ))}
        </div>

        {/* Image */}
        <div className="md:col-span-8 relative aspect-[3/4] overflow-hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0.6, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={works[active].image}
              alt={works[active].title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

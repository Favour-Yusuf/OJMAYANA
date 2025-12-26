"use client";

import { motion } from "framer-motion";

const lines = [
  "We elevate perception.",
  "We build visual authority.",
  "We translate African stories",
  "into global institutions.",
];

export default function Manifesto() {
  return (
    <section className="px-6 md:px-24 py-48 bg-black">
      <div className="max-w-5xl">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="text-4xl md:text-6xl font-light leading-tight text-white/90"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

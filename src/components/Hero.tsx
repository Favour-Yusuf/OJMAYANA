"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax + fade
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background Video */}
      <motion.video
        style={{ y, opacity }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Film Grain */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-6 md:px-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[14vw] md:text-[9rem] leading-[0.9] font-light tracking-tight">
            OJMAYANA
            <br />
            <span className="opacity-60">STUDIOS</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Visual authority for brands ready to be remembered.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-6 md:right-24 text-xs uppercase tracking-widest text-white/50">
        Scroll
      </div>
    </section>
  );
}

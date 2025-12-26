"use client";

import { motion } from "framer-motion";

const steps = [
  "Research & Cultural Insight",
  "Creative Direction",
  "Production & Craft",
  "Post-Production & Delivery",
];

export default function ProcessRitual() {
  return (
    <section className="px-6 md:px-24 py-48 bg-black">
      <div className="grid md:grid-cols-12 gap-20">
        <p className="md:col-span-4 text-sm uppercase tracking-widest text-white/40">
          The Ritual
        </p>

        <div className="md:col-span-8 space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-3xl font-light"
            >
              <span className="opacity-40 mr-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

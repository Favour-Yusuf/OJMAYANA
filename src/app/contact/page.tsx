"use client"

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send formData to your backend or email API
    alert("Form submitted! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <main className="pt-24 bg-black text-white">
      <section className="px-6 md:px-24 pb-40">
        <h1 className="text-[10vw] md:text-[6rem] font-light leading-[1]">
          Contact
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-white/70">
          Reach out to OJMAYANA STUDIOS to discuss your project or schedule a session.
          We're available online and can travel for assignments.
        </p>
      </section>

      <section className="px-6 md:px-24 pb-56">
        <div className="max-w-4xl mx-auto space-y-16">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/30 p-4 placeholder-white/50 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/30 p-4 placeholder-white/50 text-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/30 p-4 placeholder-white/50 text-white"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-black border border-white/30 p-4 text-white"
            >
              <option value="" disabled>Select Service Type</option>
              <option value="Photography">Photography</option>
              <option value="Videography">Videography</option>
              <option value="Branding">Branding</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-black border border-white/30 p-4 text-white"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full bg-black border border-white/30 p-4 placeholder-white/50 text-white"
            />

            <button
              type="submit"
              className="inline-block px-8 py-4 border border-[#dfaa26] hover:bg-[#dfaa26] hover:text-black text-white font-light transition"
            >
              Send Message
            </button>
          </form>

          <div className="pt-16 space-y-6">
            <h2 className="text-3xl font-light">Download Our Rate Card</h2>
            <Link
              href="/rate-card.pdf"
              target="_blank"
              className="inline-block text-[#dfaa26] border-b border-[#dfaa26] pb-1"
            >
              Download PDF
            </Link>
          </div>

          <div className="pt-16">
            <h2 className="text-3xl font-light mb-6">Chat on WhatsApp</h2>
            <a
              href="https://wa.me/2347032539068"
              target="_blank"
              className="inline-block px-8 py-4 border border-[#dfaa26] hover:bg-[#dfaa26] hover:text-black font-light transition"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

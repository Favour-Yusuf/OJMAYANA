import Link from "next/link"
import RateCardDropdown from "../RateCardDropdown"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Brand / Statement */}
        <div className="md:col-span-2">
          <Link href="/" >
            <Image
              src="/logo.png"
              alt="OJMayana Studios Logo"
              width={150}
              height={100}
              
            />
          </Link>

          <p className="max-w-md text-white/70 leading-relaxed">
            A creative documentary studio helping African brands grow
            into corporations through powerful, intentional storytelling.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
            Navigation
          </p>

          <ul className="space-y-4 text-sm uppercase tracking-widest">
            <li>
              <Link href="/about" className="text-white/70 hover:text-[#dfaa26] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-white/70 hover:text-[#dfaa26] transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white/70 hover:text-[#dfaa26] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/70 hover:text-[#dfaa26] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
            Contact
          </p>

          <ul className="space-y-4 text-sm text-white/70">
            <li>
              <span className="block text-white/40">Email</span>
              ojmayana61@gmail.com
            </li>

            <li>
              <span className="block text-white/40">Phone / WhatsApp</span>
              07032539068
            </li>

            <li>
              <span className="block text-white/40">Location</span>
              Online · Available to travel
            </li>
          </ul>

          {/* Social */}
          <div className="mt-8 space-y-2 text-sm">
            <a
              href="https://www.instagram.com/ojmayana_/"
              target="_blank"
              className="block text-white/60 hover:text-[#dfaa26] transition"
            >
              Instagram · @ojmayana_
            </a>
            <a
              href="https://www.instagram.com/ojmayanastudios/"
              target="_blank"
              className="block text-white/60 hover:text-[#dfaa26] transition"
            >
              Instagram · @ojmayanastudios
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Left */}
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} OJMayana Studios · Stories that last.
        </p>

        {/* Right actions */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
          <RateCardDropdown />


          <Link
            href="/contact"
            className="text-white/60 hover:text-[#dfaa26] transition"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </footer>
  )
}

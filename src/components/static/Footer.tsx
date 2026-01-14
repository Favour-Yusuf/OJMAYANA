import Link from "next/link"
import Image from "next/image"
import {
  Instagram,
  Mail,
  Phone,
} from "lucide-react"

import RateCardDropdown from "../RateCardDropdown"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Brand */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="OJMayana Studios Logo"
              width={150}
              height={80}
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
            {[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-[#dfaa26] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
            Contact
          </p>

          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-[#dfaa26]" />
              <a
                href="mailto:ojmayana61@gmail.com"
                className="hover:text-white transition"
              >
                ojmayana61@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-[#dfaa26]" />
              <a
                href="tel:07032539068"
                className="hover:text-white transition"
              >
                07032539068
              </a>
            </li>

            <li className="text-white/50 text-sm">
              Online · Available to travel
            </li>
          </ul>

          {/* Social icons */}
          <div className="mt-8 flex-col items-center gap-5">
            <div className="flex mb-3.5">
               <Instagram className="h-5 w-5 text-[#dfaa26]" />
            <a
              href="https://www.instagram.com/ojmayanastudios/"
              target="_blank"
              aria-label="Instagram OJMayana"
              className="text-white/60 hover:text-[#dfaa26]/70 transition ml-2.5"
            >
             @ojmayanastudios
            </a>
            </div>
            

             <div className="flex mb-3.5">
               <Instagram className="h-5 w-5 text-[#dfaa26]" />
            <a
              href="https://www.instagram.com/ojmayana_/"
              target="_blank"
              aria-label="Instagram OJMayana"
              className="text-white/60 hover:text-[#dfaa26]/70 transition ml-2.5"
            >
             @ojmayana_
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">

        {/* Left */}
        <p className="text-xs text-white/40 text-center md:text-left">
          © {new Date().getFullYear()} OJMayana Studios · Stories that last.
        </p>

        {/* Right actions */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-xs uppercase tracking-widest">

          {/* Centered on mobile to avoid cutoff */}
          <div className="relative flex justify-center w-full md:w-auto">
            <RateCardDropdown align="center" />
          </div>

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

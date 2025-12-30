"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-5 text-white">

        {/* Logo / Studio Name */}
        <Link
          href="/"
          className="text-sm uppercase tracking-widest"
        >
          OJMayana Studios
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest text-white/80">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="border border-white px-6 py-2 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Contact
        </Link>

      </div>
    </header>
  )
}

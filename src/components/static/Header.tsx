"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-20 py-5 text-white">

          {/* Logo */}
          <Link href="/" className="text-sm w-[150px] h-[70px] uppercase tracking-widest">
            <Image
              src="/logo.png"
              alt="OJMayana Studios Logo"
              width={100}
              height={100}
              className="h-full w-full  object-center object-cover"
            />
          </Link>

          {/* Desktop / Tablet Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest text-white/80">
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/portfolio" className="hover:text-white transition">
              Portfolio
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block border border-white px-6 py-2 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center space-y-1.5"
            aria-label="Menu"
          >
            <span
              className={`h-px w-6 bg-white transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black text-white transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-6 space-y-12">

          <MobileLink href="/services" onClick={() => setOpen(false)}>
            Services
          </MobileLink>

          <MobileLink href="/about" onClick={() => setOpen(false)}>
            About
          </MobileLink>

          <MobileLink href="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </MobileLink>

          <MobileLink href="/contact" onClick={() => setOpen(false)} isCTA>
            Contact
          </MobileLink>

        </div>
      </div>
    </>
  )
}

/* ----------------- */
/* Mobile Link       */
/* ----------------- */

function MobileLink({
  href,
  children,
  onClick,
  isCTA = false,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
  isCTA?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-4xl font-light transition ${
        isCTA ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}

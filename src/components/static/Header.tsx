"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
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
          scrolled
            ? "bg-black/90 backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-20 py-5">
          <div className="grid grid-cols-3 items-center text-white">

            {/* LOGO — LOCKED LEFT */}
            <Link href="/" className="relative w-[150px] h-[60px] justify-self-start">
              <Image
                src="/logo.png"
                alt="OJMayana Studios Logo"
                fill
                priority
                className="object-cover"
              />
            </Link>

            {/* NAV — TRUE CENTER */}
            <nav className="hidden md:flex justify-center space-x-12 text-xs uppercase tracking-widest text-white/80">
              <NavLink href="/services" active={pathname === "/services"}>
                Services
              </NavLink>
              <NavLink href="/about" active={pathname === "/about"}>
                About
              </NavLink>
              <NavLink
                href="/portfolio"
                active={pathname.startsWith("/portfolio")}
              >
                Portfolio
              </NavLink>
            </nav>

            {/* CTA — LOCKED RIGHT */}
            <div className="hidden md:flex justify-self-end">
              <Link
                href="/contact"
                className={`border px-6 py-2 text-xs uppercase tracking-widest transition ${
                  pathname === "/contact"
                    ? "bg-[#dfaa26] text-black border-[#dfaa26]"
                    : "border-[#dfaa26] text-[#dfaa26] hover:bg-[#dfaa26] hover:text-black"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden justify-self-end flex flex-col space-y-1.5"
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
        </div>

        {/* Gold accent line */}
        {scrolled && <div className="h-px w-full bg-[#dfaa26]/60" />}
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black text-white transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-6 space-y-14">
          <MobileLink href="/services" active={pathname === "/services"} onClick={() => setOpen(false)}>
            Services
          </MobileLink>
          <MobileLink href="/about" active={pathname === "/about"} onClick={() => setOpen(false)}>
            About
          </MobileLink>
          <MobileLink
            href="/portfolio"
            active={pathname.startsWith("/portfolio")}
            onClick={() => setOpen(false)}
          >
            Portfolio
          </MobileLink>
          <MobileLink
            href="/contact"
            active={pathname === "/contact"}
            isCTA
            onClick={() => setOpen(false)}
          >
            Contact
          </MobileLink>
        </div>
      </div>
    </>
  )
}

/* Desktop Nav Link */
function NavLink({
  href,
  children,
  active,
}: {
  href: string
  children: React.ReactNode
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`relative transition ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-2 left-0 h-px transition-all duration-300 ${
          active ? "w-full bg-[#dfaa26]" : "w-0 bg-[#dfaa26] hover:w-full"
        }`}
      />
    </Link>
  )
}

/* Mobile Nav Link */
function MobileLink({
  href,
  children,
  onClick,
  active,
  isCTA = false,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
  active: boolean
  isCTA?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-4xl font-light transition ${
        isCTA
          ? "text-[#dfaa26]"
          : active
          ? "text-white"
          : "text-white/60 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}

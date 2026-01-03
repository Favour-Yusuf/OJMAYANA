"use client"

import Link from "next/link"

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/+2347032539068?text=Hello%20OJMAYANA%20Studios,%20I’d%20like%20to%20enquire%20about%20a%20project."
      target="_blank"
      aria-label="Chat with OJMAYANA Studios on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full
                 bg-[#dfaa26] px-5 py-4 text-black shadow-lg
                 transition hover:scale-105 hover:shadow-xl
                 md:bottom-10 md:right-10"
    >
      {/* WhatsApp Icon (SVG, no dependency) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M16 .3C7.2.3 0 7.5 0 16.3c0 2.9.8 5.7 2.2 8.1L.1 32l7.9-2.1c2.3 1.3 5 2.1 7.9 2.1 8.8 0 16-7.2 16-16S24.8.3 16 .3zm0 29c-2.6 0-5-.7-7.2-2L4 28.6l1.3-4c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.6 6.2-13.8 13.8-13.8S29.8 9.7 29.8 17.3 23.6 31.1 16 31.1z"/>
        <path d="M24.4 20.2c-.4-.2-2.5-1.2-2.9-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5-.1-.7-.2-.2-1-2.4-1.3-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3 0 1.7 1.3 3.4 1.5 3.6.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.5-1 2.9-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z"/>
      </svg>

      <span className="hidden sm:inline text-xs uppercase tracking-widest">
        Chat on WhatsApp
      </span>
    </Link>
  )
}

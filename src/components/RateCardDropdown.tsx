"use client"

import { useState, useRef, useEffect } from "react"

export default function RateCardDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-white/60 uppercase tracking-widest text-xs hover:text-[#dfaa26] transition"
      >
        Rate Cards ▾
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-48 border border-white/10 bg-black text-white shadow-lg">
          <a
            href="/photo-rate-card.pdf"
            download
            className="block px-5 py-3 text-sm text-white/70 hover:text-[#dfaa26] transition"
          >
            Photography
          </a>

          <a
            href="/video-rate-card.pdf"
            download
            className="block px-5 py-3 text-sm text-white/70 hover:text-[#dfaa26] transition"
          >
            Videography
          </a>
        </div>
      )}
    </div>
  )
}

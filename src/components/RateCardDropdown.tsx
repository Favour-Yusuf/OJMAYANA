"use client"

import { useState, useRef, useEffect } from "react"

type RateCardDropdownProps = {
  align?: "center" | "right"
}

export default function RateCardDropdown({
  align = "right",
}: RateCardDropdownProps) {
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
    <div ref={ref} className="relative flex justify-center">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white/60 uppercase tracking-widest text-xs hover:text-[#dfaa26] transition"
      >
        Rate Cards ▾
      </button>

      {open && (
        <div
          className={`
            absolute mt-4 w-52 border border-white/10 bg-black text-white shadow-xl
            ${align === "center"
              ? "left-1/2 -translate-x-1/2"
              : "right-0"
            }
          `}
        >
          <a
            href="/photo-rate-card.pdf"
            download
            className="block px-5 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-[#dfaa26] transition"
          >
            Photography
          </a>

          <div className="h-px bg-white/10" />

          <a
            href="/video-rate-card.pdf"
            download
            className="block px-5 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-[#dfaa26] transition"
          >
            Videography
          </a>
        </div>
      )}
    </div>
  )
}

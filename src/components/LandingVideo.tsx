"use client"

export default function LandingVideo() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="YOUR_VIDEO_URL_HERE"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay (for contrast & premium feel) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Optional content layer */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-white/60">
            OJMayana Studios
          </p>

          <h1 className="text-4xl md:text-6xl font-light leading-tight text-white">
            Stories that last.
          </h1>
        </div>
      </div>
    </section>
  )
}

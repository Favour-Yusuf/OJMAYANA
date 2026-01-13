"use client"

import Image from "next/image"

const logos = [
  {
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768304052/nivea-men_pl3i1q.webp",
    alt: "Nivea Men",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768304048/%D7%9C%D7%95%D7%92%D7%95_%D7%A9%D7%9C_%D7%A7%D7%91%D7%95%D7%A6%D7%AA_GAC_fectjh.png",
    alt: "GAC",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768304047/ANKO_LOGO_icon_aawuzl.png",
    alt: "Anko",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768304047/images_qttq8r.png",
    alt: "Client",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768305449/10-102806_advertiser-content-from-jameson-irish-whiskey-logo-jameson-irish-whiskey-logo-removebg-preview_oibvbp.png",
    alt: "Jameson",
  },
  {
    src: "https://res.cloudinary.com/defbalxci/image/upload/v1768305390/Untitled-1-removebg-preview_ipln6m.png",
    alt: "Eleven Sixteen",
  },
]

export default function ClientLogosMarquee() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/10 overflow-hidden">
      <div className="px-6 md:px-20 mb-12">
        <p className="text-xs uppercase tracking-widest text-white/50">
          Trusted by
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee flex w-max items-center gap-20">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <Logo key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}


function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center h-14 w-32 bg-white/50 rounded-md">
        <Image
          src={src}
          alt={alt}
          width={160}
          height={80}
          className="h-10 w-auto object-contain opacity-80"
        />
      </div>
    </div>
  )
}

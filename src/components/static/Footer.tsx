import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-widest">
            OJMayana Studios
          </p>

          <p className="max-w-sm text-white/70 leading-relaxed">
            A creative documentary studio helping African brands
            grow into corporations through powerful storytelling.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
            Navigation
          </p>

          <ul className="space-y-4 text-sm uppercase tracking-widest text-white/70">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
            Contact
          </p>

          <ul className="space-y-4 text-sm text-white/70">
            <li>ojmayana61@gmail.com</li>
            <li>07032539068</li>
            <li className="text-white/50">
              Available worldwide
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} OJMayana Studios</p>
        <p>Stories that last.</p>
      </div>
    </footer>
  )
}

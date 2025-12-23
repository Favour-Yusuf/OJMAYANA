import Link from "next/link";


export function Footer() {
return (
<footer className="border-t border-black/10 bg-white">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-3">
{/* Studio Info */}
<div className="space-y-4">
<p className="text-lg font-medium">OJMAYANA STUDIOS</p>
<p className="text-sm text-black/70">
African visual narratives crafted with intention.
</p>
</div>


{/* Contact */}
<div className="space-y-3">
<p className="font-medium">Contact</p>
<p className="text-sm">ojmayana61@gmail.com</p>
<a
href="https://wa.me/2347032539068"
className="inline-block text-sm underline underline-offset-4"
>
WhatsApp
</a>
</div>


{/* Links */}
<div className="space-y-3">
<p className="font-medium">Explore</p>
<Link href="/services" className="block text-sm">Services</Link>
<Link href="/portfolio" className="block text-sm">Portfolio</Link>
<a href="/rate-card.pdf" download className="block text-sm">
Download Rate Card
</a>
</div>
</div>


<div className="px-6 pb-6 text-center text-xs text-black/50">
© {new Date().getFullYear()} OJMAYANA STUDIOS. All rights reserved.
</div>
</footer>
);
}
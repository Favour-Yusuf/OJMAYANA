import Link from "next/link";


export function Header() {
return (
<header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
{/* Logo */}
<Link href="/" className="text-lg font-medium tracking-wide">
OJMAYANA STUDIOS
</Link>


{/* Desktop Nav */}
<nav className="hidden gap-10 md:flex">
<Link href="/portfolio" className="nav-link">Portfolio</Link>
<Link href="/services" className="nav-link">Services</Link>
<Link href="/about" className="nav-link">About</Link>
<Link href="/journal" className="nav-link">Journal</Link>
<Link href="/contact" className="nav-link">Contact</Link>
</nav>
</div>
</header>
);
}
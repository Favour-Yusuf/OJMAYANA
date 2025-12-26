import Link from "next/link";

export default function AuthorityCTA() {
  return (
    <section className="px-6 md:px-24 py-48 bg-black">
      <div className="max-w-5xl">
        <p className="text-4xl md:text-5xl font-light leading-tight mb-12">
          Work with a studio that understands culture,
          <br />
          commerce, and longevity.
        </p>

        <Link
          href="/contact"
          className="inline-block text-2xl font-light border-b border-[#dfaa26] pb-2"
        >
          Begin a project
        </Link>
      </div>
    </section>
  );
}

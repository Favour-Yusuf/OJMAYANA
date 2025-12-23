import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-24 bg-black text-white">
      <section className="min-h-screen flex items-center px-6 md:px-24">
        <div className="max-w-6xl">
          <h1 className="text-[12vw] md:text-[8rem] font-light leading-[0.95]">
            OJMAYANA
            <br />
            STUDIOS
          </h1>

          <p className="mt-12 max-w-xl text-lg text-white/70">
            A creative studio shaping African brands into global institutions
            through photography, film, and visual culture.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-24 py-48">
        <div className="grid md:grid-cols-12 gap-20">
          <p className="md:col-span-4 text-sm uppercase tracking-widest text-white/40">
            Philosophy
          </p>

          <div className="md:col-span-8 space-y-10 text-2xl font-light leading-relaxed">
            <p>
              OJMAYANA STUDIOS exists to elevate the perception of what comes from
              Africa.
            </p>
            <p>
              Founded from the need to help small and medium scale businesses grow
              into institutions, the studio began as a design practice and evolved
              into photography and film — not as decoration, but as infrastructure.
            </p>
            <p>
              We believe visual storytelling builds trust, shapes desire, and
              determines longevity. Our work is intentional, culturally grounded,
              and commercially aware.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-48">
        <Image
          src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
          alt="OJMAYANA Studios Archive"
          width={2400}
          height={1600}
          className="w-full object-cover"
          priority
        />
      </section>

      <section className="px-6 md:px-24 py-40">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-10">
            Rooted in Africa.
            <br />
            Relevant everywhere.
          </h2>

          <p className="text-lg leading-relaxed text-white/70">
            We work at the intersection of culture, commerce, and craft —
            translating African narratives into contemporary visual systems that
            resonate globally. Our focus is not trends, but timelessness.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-48">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <Image
              src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
              alt="Fashion Campaigns"
              width={1200}
              height={1600}
              className="w-full object-cover"
            />
            <p className="mt-6 text-sm uppercase tracking-widest text-white/70">
              Fashion Campaigns
            </p>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
              alt="Brand Portraiture"
              width={1200}
              height={1600}
              className="w-full object-cover"
            />
            <p className="mt-6 text-sm uppercase tracking-widest text-white/70">
              Brand Portraiture
            </p>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
              alt="Motion and Visual Narratives"
              width={1200}
              height={1600}
              className="w-full object-cover"
            />
            <p className="mt-6 text-sm uppercase tracking-widest text-white/70">
              Motion & Visual Narratives
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-48">
        <div className="grid md:grid-cols-12 gap-20">
          <p className="md:col-span-4 text-sm uppercase tracking-widest text-white/40">
            Method
          </p>

          <div className="md:col-span-8 space-y-6 text-xl font-light">
            <p>Research & Cultural Insight</p>
            <p>Creative Direction</p>
            <p>Production & Craft</p>
            <p>Post-Production & Delivery</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-40">
        <p className="text-2xl font-light max-w-5xl text-white/80">
          Fashion and e-commerce photography, product and portraiture, corporate
          and documentary coverage, motion, and brand systems — built to convert
          attention into authority.
        </p>
      </section>

      <section className="px-6 md:px-24 py-48">
        <Link
          href="/contact"
          className="text-2xl font-light border-b border-[#dfaa26] pb-2"
        >
          Begin a project
        </Link>
      </section>
    </main>
  );
}

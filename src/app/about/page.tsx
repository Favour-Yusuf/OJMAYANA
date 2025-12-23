import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-24 bg-black text-white">
      <section className="px-6 md:px-24 pb-40">
        <h1 className="text-[10vw] md:text-[6rem] font-light leading-[1]">
          About
        </h1>

        <p className="mt-10 max-w-2xl text-lg text-white/70">
          OJMAYANA STUDIOS is a creative studio built to help African brands grow
          into trusted institutions through intentional visual storytelling.
        </p>
      </section>

      <section className="px-6 md:px-24 py-40">
        <div className="grid md:grid-cols-12 gap-20">
          <p className="md:col-span-4 text-sm uppercase tracking-widest text-white/40">
            Our Story
          </p>

          <div className="md:col-span-8 space-y-10 text-2xl font-light leading-relaxed">
            <p>
              OJMAYANA STUDIOS started from the need to help small and medium scale
              businesses find clarity, visibility, and trust through design.
            </p>
            <p>
              What began as a graphic design practice evolved naturally into
              photography and cinematography — expanding the studio’s ability to
              tell complete, compelling stories across multiple visual formats.
            </p>
            <p>
              The goal has remained consistent: to tell meaningful stories that
              help clients communicate their vision, connect with their audience,
              and build long-lasting businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-48">
        <Image
          src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
          alt="OJMAYANA Studios Behind the Scenes"
          width={2400}
          height={1600}
          className="w-full object-cover"
        />
      </section>

      <section className="px-6 md:px-24 py-40">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-10">
            Purpose
          </h2>

          <p className="text-lg leading-relaxed text-white/70">
            To build an African creative powerhouse that helps small and medium
            scale businesses grow into corporations through powerful media —
            elevating the impression of what comes from Africa.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-24 py-48">
        <div className="grid md:grid-cols-12 gap-20">
          <p className="md:col-span-4 text-sm uppercase tracking-widest text-white/40">
            Team
          </p>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
                alt="Nonye Ezeaka"
                width={800}
                height={1000}
                className="w-full object-cover"
              />
              <p className="mt-6 text-sm uppercase tracking-widest">
                Nonye Ezeaka
              </p>
            </div>

            <div>
              <Image
                src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
                alt="Aron"
                width={800}
                height={1000}
                className="w-full object-cover"
              />
              <p className="mt-6 text-sm uppercase tracking-widest">
                Aron
              </p>
            </div>

            <div>
              <Image
                src="https://res.cloudinary.com/defbalxci/image/upload/v1765903946/DSC09404_gztwxv.jpg"
                alt="Benjamin Olisa"
                width={800}
                height={1000}
                className="w-full object-cover"
              />
              <p className="mt-6 text-sm uppercase tracking-widest">
                Benjamin Olisa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-40">
        <div className="max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-light">
            A Message from the Creative Director
          </h2>

          <p className="text-2xl font-light leading-relaxed text-white/80">
            OJMAYANA STUDIOS is where creative people grow by doing bold,
            high-quality work that gets noticed — and builds their reputation,
            income, and skill set for the long term.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-48">
        <Link
          href="/contact"
          className="text-2xl font-light border-b border-[#dfaa26] pb-2"
        >
          Work with us
        </Link>
      </section>
    </main>
  );
}

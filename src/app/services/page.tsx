import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="pt-24 bg-black text-white">
      <section className="px-6 md:px-24 pb-40">
        <h1 className="text-[10vw] md:text-[6rem] font-light leading-[1]">
          Services
        </h1>

        <p className="mt-10 max-w-2xl text-lg text-white/70">
          OJMAYANA STUDIOS provides photography, videography, and brand-focused
          visual services designed to help small and medium-scale businesses
          evolve into trusted institutions.
        </p>
      </section>

      <section className="px-6 md:px-24 pb-56 space-y-40">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Fashion Campaign & E-commerce Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Fashion photography is one of OJMAYANA STUDIOS’ core strengths. We work
            closely with designers and fashion brands to create campaign imagery
            and e-commerce visuals that communicate identity, craftsmanship, and
            value. Every shoot is approached with brand trust in mind — ensuring
            prospective and existing customers connect with the brand’s story and
            aesthetic.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Product Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            High-quality product imagery that highlights form, texture, and
            detail. Shot in controlled lighting environments to create clean,
            sharp visuals suitable for online stores, advertisements, and
            catalogs — helping products feel premium, credible, and desirable.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Portrait & Lifestyle Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Natural, expressive imagery that captures people within real-life or
            thoughtfully styled environments. These images focus on personality,
            mood, and storytelling — ideal for branding, personal portfolios,
            campaigns, and social platforms.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Corporate Event Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Professional documentation of conferences, seminars, award nights,
            launches, and corporate gatherings. Our approach captures key moments,
            speakers, interactions, and atmosphere — creating a visual record
            suitable for publicity, reports, and internal communications.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Documentary Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Authentic, unscripted visual storytelling that captures real people,
            environments, and moments with minimal interference. Documentary work
            focuses on emotion, culture, and narrative depth — often highlighting
            stories with social or cultural relevance.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Food Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Carefully styled food imagery that emphasizes texture, color, and
            freshness. Shot using controlled or natural lighting to create
            visually appealing photographs suitable for menus, advertisements,
            packaging, and social media.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Pre-Wedding Photography</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Romantic and styled pre-wedding photo sessions focused on connection,
            chemistry, and storytelling. These shoots are often set in scenic or
            meaningful locations and help couples visually define the tone of
            their wedding journey.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Videography & Motion</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Fashion and e-commerce videos, corporate event coverage, interviews,
            personal branding content, podcasts, YouTube videos, and post-production
            editing services. We also produce short-form influencer campaign videos
            designed specifically for brand awareness and digital platforms.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-light">Branding Services</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Visual branding services for startups and established brands. From
            creative direction to visual identity assets, we help brands define
            how they look, feel, and communicate — ensuring consistency across
            photography, video, and digital platforms.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-48">
        <Link
          href="/contact"
          className="text-2xl font-light border-b border-[#dfaa26] pb-2"
        >
          Discuss a project
        </Link>
      </section>
    </main>
  );
}

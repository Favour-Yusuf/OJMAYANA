export default function StudioStory() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20">

        {/* Section label */}
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Our Story
          </p>
        </div>

        {/* Story content */}
        <div className="md:col-span-9 space-y-24">

          {/* Beat 1 */}
          <StoryBeat
            title="It started with a need."
            text="OJMAYANA Studios began with a simple goal: to help small and growing businesses communicate clearly and attract the right customers."
            image="https://res.cloudinary.com/defbalxci/image/upload/v1765903242/DSC01483_xnusrn.jpg"
            imageLeft
          />

          {/* Beat 2 */}
          <StoryBeat
            title="The work evolved."
            text="What began as graphic design naturally expanded into photography and film, as we realized powerful stories live beyond a single medium."
            image="https://res.cloudinary.com/defbalxci/image/upload/v1765903958/FEMALE_ARTISTE0059_qlvvbb.jpg"
          />

          {/* Beat 3 */}
          <StoryBeat
            title="The goal stayed the same."
            text="Today, we work with brands that want to be taken seriously—creating documentary-led visuals that build trust and support long-term growth."
            image="https://res.cloudinary.com/defbalxci/image/upload/v1765903284/DSC08305-Edit_enctsy.jpg"
            imageLeft
          />

        </div>
      </div>
    </section>
  )
}

/* -------------------------------- */
/* Story Beat Component              */
/* -------------------------------- */

function StoryBeat({
  title,
  text,
  image,
  imageLeft = false,
}: {
  title: string
  text: string
  image: string
  imageLeft?: boolean
}) {
  return (
    <div className="grid md:grid-cols-12 gap-12 items-center">

      {/* Image */}
      <div
        className={`md:col-span-5 ${
          imageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div
        className={`md:col-span-7 space-y-6 ${
          imageLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <h3 className="text-2xl font-serif md:text-3xl font-semibold">
          {title}
        </h3>

        <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
          {text}
        </p>
      </div>

    </div>
  )
}

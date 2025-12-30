"use client"

export default function FeaturedWork() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            Selected work
          </p>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            A few stories we’ve told.
          </h2>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Image 1 */}
          <div className="md:col-span-7">
            <img
              src="https://res.cloudinary.com/defbalxci/image/upload/v1765903242/DSC01483_xnusrn.jpg"
              alt=""
              className="w-full h-[70vh] object-cover"
            />
            <p className="mt-4 text-sm text-white/60">
              Fashion Campaign
            </p>
          </div>

          {/* Image 2 */}
          <div className="md:col-span-5 md:mt-32">
            <img
              src="https://res.cloudinary.com/defbalxci/image/upload/v1765903958/FEMALE_ARTISTE0059_qlvvbb.jpg"
              alt=""
              className="w-full h-[55vh] object-cover"
            />
            <p className="mt-4 text-sm text-white/60">
              Portraits
            </p>
          </div>

          {/* Image 3 */}
          <div className="md:col-span-8">
            <img
              src="https://res.cloudinary.com/defbalxci/image/upload/v1765903441/Artboard_8_pykwhp.jpg"
              alt=""
              className="w-full h-[65vh] object-cover"
            />
            <p className="mt-4 text-sm text-white/60">
              Corporate Storytelling
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

"use client"

export default function FeaturedWork() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
            Selected work
          </p>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            A few stories we’ve told.
          </h2>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Image 1 */}
          <WorkItem
            col="md:col-span-7"
            height="h-[70vh]"
            title="Fashion Campaign"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903242/DSC01483_xnusrn.jpg"
          />

          {/* Image 2 */}
          <WorkItem
            col="md:col-span-5 md:mt-32"
            height="h-[55vh]"
            title="Portraits"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903935/DSC09392_jsbmhg.jpg"
          />

          {/* Image 3 */}
          <WorkItem
            col="md:col-span-8"
            height="h-[65vh]"
            title="Events"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903075/DSC09988_rhaxan.jpg"
          />

          {/* Image 4 */}
          <WorkItem
            col="md:col-span-4 md:mt-40"
            height="h-[50vh]"
            title="Portrait"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903958/FEMALE_ARTISTE0059_qlvvbb.jpg"
          />

          {/* Image 5 */}
          <WorkItem
            col="md:col-span-6"
            height="h-[60vh]"
            title="Product Photography"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903837/DSC06340-14_jblqby.jpg"
          />

          {/* Image 6 */}
          <WorkItem
            col="md:col-span-6 md:mt-24"
            height="h-[60vh]"
            title="Lifestyle"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903759/DSC01376_pqqtry.jpg"
          />

          {/* Image 7 */}
          <WorkItem
            col="md:col-span-5"
            height="h-[55vh]"
            title="Food Photography"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1767187425/OJM00262_1_p04vyz.jpg"
          />

          {/* Image 8 */}
          <WorkItem
            col="md:col-span-7 md:mt-36"
            height="h-[70vh]"
            title="Coperate"
            src="https://res.cloudinary.com/defbalxci/image/upload/v1765903441/Artboard_8_pykwhp.jpg"
          />

        </div>
      </div>
    </section>
  )
}

/* ----------------------------- */
/* Work Item Component           */
/* ----------------------------- */

function WorkItem({
  src,
  title,
  col,
  height,
}: {
  src: string
  title: string
  col: string
  height: string
}) {
  return (
    <div className={`${col}`}>
      <img
        src={src}
        alt={title}
        className={`w-full ${height} object-cover`}
      />
      <p className="mt-4 text-sm text-white/60">
        {title}
      </p>
    </div>
  )
}

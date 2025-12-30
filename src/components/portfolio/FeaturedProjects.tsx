const projects = [
  {
    title: "Fashion Campaign",
    description: "Visual storytelling for emerging fashion brands.",
    image: "/images/portfolio-1.jpg",
  },
  {
    title: "Documentary Series",
    description: "Real stories captured with honesty and restraint.",
    image: "/images/portfolio-2.jpg",
  },
  {
    title: "Corporate Storytelling",
    description: "Helping businesses look credible and confident.",
    image: "/images/portfolio-3.jpg",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, i) => (
          <div key={i} className="space-y-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[75vh] object-cover"
            />

            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-light">
                {project.title}
              </h2>
              <p className="mt-3 text-white/70">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

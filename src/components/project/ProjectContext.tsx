type ProjectContextProps = {
  description: string
}

export default function ProjectContext({
  description,
}: ProjectContextProps) {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-3xl">

        <p className="text-lg md:text-xl font-light leading-relaxed text-white/75">
          {description}
        </p>

      </div>
    </section>
  )
}

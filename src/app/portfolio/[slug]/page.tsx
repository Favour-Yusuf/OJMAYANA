import { notFound } from "next/navigation"
import { projects } from "@/components/data/projects"

import ProjectHero from "@/components/project/ProjectHero"
import ProjectContext from "@/components/project/ProjectContext"
import ProjectGallery from "@/components/project/ProjectGallery"
import ProjectNavigation from "@/components/project/ProjectNavigation"
import ProjectCTA from "@/components/project/ProjectCTA"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params

  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return notFound()

  const project = projects[index]

  const prev = index > 0 ? projects[index - 1] : undefined
  const next = index < projects.length - 1 ? projects[index + 1] : undefined

  return (
    <>
      <ProjectHero
        title={project.title}
        category={project.category}
        coverImage={project.coverImage}
      />

      <ProjectContext description={project.description} />

      <ProjectGallery media={project.media} />


      <ProjectNavigation prev={prev} next={next} />

      <ProjectCTA />
    </>
  )
}

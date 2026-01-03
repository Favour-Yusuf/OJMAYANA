import { notFound } from "next/navigation"
import { projects } from "@/components/data/projects"

import ProjectHero from "@/components/project/ProjectHero"
import ProjectContext from "@/components/project/ProjectContext"
import ProjectGallery from "@/components/project/ProjectGallery"
import ProjectCTA from "@/components/project/ProjectCTA"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params

  const project = projects.find(
    (p) => p.slug === slug
  )

  if (!project) return notFound()

  return (
    <>
      <ProjectHero
        title={project.title}
        category={project.category}
        coverImage={project.coverImage}
      />

      <ProjectContext description={project.description} />

      <ProjectGallery images={project.images} />

      <ProjectCTA />
    </>
  )
}

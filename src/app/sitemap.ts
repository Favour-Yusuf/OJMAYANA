import { projects } from "@/components/data/projects"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ojmayanastudios.com"

  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
  ]

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }))

  return [...staticUrls, ...projectUrls]
}

import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://risk-horizon.be/",
      lastModified: new Date().toLocaleDateString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://risk-horizon.be/A-propos",
      lastModified: new Date().toLocaleDateString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://risk-horizon.be/Missions",
      lastModified: new Date().toLocaleDateString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://risk-horizon.be/Contact",
      lastModified: new Date().toLocaleDateString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://risk-horizon.be/OSI",
      lastModified: new Date().toLocaleDateString(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}

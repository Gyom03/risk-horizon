import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/Confidentialite",
    },
    sitemap: "https://risk-horizon.be/sitemap.xml",
  }
}

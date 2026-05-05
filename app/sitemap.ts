import type { MetadataRoute } from "next";
import { services } from "./servicios/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aidesigncanarias.com";
  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...serviceUrls,
  ];
}

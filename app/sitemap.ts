import type { MetadataRoute } from "next";
import { services } from "./servicios/data";
import { zonas } from "./zonas/data";
import { sectores } from "./[sector]/data";
import { portfolioProjects } from "./data/portfolio";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://aidesigncanarias.com";

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const zonaUrls: MetadataRoute.Sitemap = zonas.map((z) => ({
    url: `${base}/zonas/${z.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectorUrls: MetadataRoute.Sitemap = sectores.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const proyectoUrls: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/proyectos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  let postUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    postUrls = posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
  } catch {
    // Blob unavailable at build time — posts will appear on next revalidation
  }

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/proyectos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...serviceUrls,
    ...zonaUrls,
    ...sectorUrls,
    ...proyectoUrls,
    ...postUrls,
    { url: `${base}/aviso-legal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}

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
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const zonaUrls: MetadataRoute.Sitemap = zonas.map((z) => ({
    url: `${base}/zonas/${z.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectorUrls: MetadataRoute.Sitemap = sectores.map((s) => ({
    url: `${base}/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const proyectoUrls: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/proyectos/${p.slug}`,
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

  // Solo el blog tiene fecha real (publishedAt). Google ignora lastmod si no es
  // fiable, y new Date() marcaba todas las URLs como cambiadas en cada build.
  const latestPost = postUrls[0]?.lastModified;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/proyectos`, changeFrequency: "monthly", priority: 0.8 },
    ...serviceUrls,
    ...zonaUrls,
    ...sectorUrls,
    ...proyectoUrls,
    ...postUrls,
    // aviso-legal, privacidad y cookies llevan noindex: no van en el sitemap
  ];
}

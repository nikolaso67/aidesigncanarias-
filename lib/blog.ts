import { list, get } from "@vercel/blob";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  publishedAt: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const { blobs } = await list({ prefix: "blog/" });
  const posts = await Promise.all(
    blobs.map(async (blob) => {
      const res = await fetch(blob.url);
      return res.json() as Promise<BlogPost>;
    })
  );
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { blobs } = await list({ prefix: `blog/${slug}.json` });
  if (blobs.length === 0) return null;
  const res = await fetch(blobs[0].url);
  return res.json() as Promise<BlogPost>;
}

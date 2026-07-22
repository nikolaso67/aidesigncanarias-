import { list } from "@vercel/blob";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  publishedAt: string;
}

async function readPost(url: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[blog] fetch ${url} devolvió ${res.status}; post omitido`);
      return null;
    }
    return (await res.json()) as BlogPost;
  } catch (err) {
    // El Blob store puede devolver texto de error (p. ej. "Your store...").
    // No dejamos que un fallo de IO tumbe el build/sitio: omitimos el post.
    console.warn(`[blog] no se pudo leer ${url}:`, err);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let blobs;
  try {
    ({ blobs } = await list({ prefix: "blog/" }));
  } catch (err) {
    console.warn("[blog] no se pudo listar el Blob store; se devuelven 0 posts:", err);
    return [];
  }
  const results = await Promise.all(blobs.map((blob) => readPost(blob.url)));
  return results
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { blobs } = await list({ prefix: `blog/${slug}.json` });
    if (blobs.length === 0) return null;
    return await readPost(blobs[0].url);
  } catch (err) {
    console.warn(`[blog] no se pudo obtener el post ${slug}:`, err);
    return null;
  }
}

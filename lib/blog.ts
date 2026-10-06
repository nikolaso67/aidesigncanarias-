import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  publishedAt: string;
}

// Los posts viven como archivos JSON en el repo (content/blog/<slug>.json).
// Se leen en build (SSG), sin dependencias externas ni cuotas: el blog nunca
// se cae por un servicio de terceros y las páginas quedan estáticas en el CDN.
const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function readAllPosts(): BlogPost[] {
  let files: string[];
  try {
    files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));
  } catch (err) {
    console.warn("[blog] no se pudo leer content/blog:", err);
    return [];
  }
  const posts: BlogPost[] = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      posts.push(JSON.parse(raw) as BlogPost);
    } catch (err) {
      console.warn(`[blog] post ilegible ${file}; omitido:`, err);
    }
  }
  return posts;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return readAllPosts().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.json`), "utf8");
    return JSON.parse(raw) as BlogPost;
  } catch {
    return null;
  }
}

// Palabras que no ayudan a decidir si dos posts tratan de lo mismo
const STOPWORDS = new Set([
  "de", "la", "el", "en", "y", "para", "tu", "los", "las", "un", "una", "con", "que",
  "por", "del", "al", "como", "es", "web", "negocio", "negocios", "gran", "canaria", "canarias",
]);

function topicWords(p: BlogPost): Set<string> {
  const text = [p.slug.replace(/-\d{4}-\d{2}-\d{2}$/, ""), ...(p.keywords ?? [])].join(" ").toLowerCase();
  return new Set(text.split(/[^a-záéíóúñü]+/).filter((w) => w.length > 2 && !STOPWORDS.has(w)));
}

/**
 * Posts relacionados por palabras de tema en común (slug + keywords).
 * Determinista: a igualdad de puntuación gana el más reciente. Sirve para
 * enlazar internamente los posts entre sí, no solo desde el índice del blog.
 */
export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];
  const words = topicWords(current);
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => ({ p, score: [...topicWords(p)].filter((w) => words.has(w)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-slate-900 mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-slate-600">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>')
    .replace(/\n\n/g, '</p><p class="text-slate-600 leading-relaxed my-4">')
    .replace(/^(?!<[h|u|l])/, '<p class="text-slate-600 leading-relaxed my-4">')
    + "</p>";
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <a href="/blog" className="text-indigo-600 hover:underline text-sm mb-8 inline-block">
          ← Volver al blog
        </a>
        <time className="block text-sm text-slate-400 mb-3">
          {new Date(post.publishedAt).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
        <p className="text-slate-500 text-lg mb-10 border-b border-slate-100 pb-8">
          {post.description}
        </p>
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl text-center">
          <p className="text-slate-700 font-medium mb-4">
            ¿Quieres una web profesional para tu negocio en Gran Canaria?
          </p>
          <a
            href="/#contacto"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Pide presupuesto gratis
          </a>
        </div>
      </div>
    </main>
  );
}

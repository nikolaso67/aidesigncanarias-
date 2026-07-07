import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

const BASE = "https://aidesigncanarias.com";

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
  const url = `${BASE}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: post.title, description: post.description, publishedTime: post.publishedAt },
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-slate-900 mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>')
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

  const url = `${BASE}/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url,
    inLanguage: "es-ES",
    keywords: post.keywords?.join(", "),
    author: {
      "@type": "Organization",
      name: "AI Design Canarias",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Design Canarias",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/opengraph-image` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="grain relative bg-ink text-white px-4 pt-16 pb-12 overflow-hidden -mt-20">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto pt-24">
          <Link href="/blog" className="text-accent-bright hover:underline text-sm mb-8 inline-block">
            ← Volver al blog
          </Link>
          <time className="block text-sm text-slate-400 mb-3">
            {new Date(post.publishedAt).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-display text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-slate-400 text-lg">{post.description}</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
        <div className="mt-16 p-8 bg-paper border border-ink/10 rounded-2xl text-center">
          <p className="text-slate-700 font-medium mb-4">
            ¿Quieres una web profesional para tu negocio en Gran Canaria?
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-bright transition-colors"
          >
            Pide presupuesto gratis
          </Link>
        </div>
      </div>
    </main>
  );
}

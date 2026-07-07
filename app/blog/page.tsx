import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Diseño Web y SEO en Gran Canaria",
  description:
    "Artículos sobre diseño web, SEO local y presencia digital para negocios en Gran Canaria. Consejos prácticos de AI Design Canarias.",
};

export const revalidate = 3600; // revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <section className="grain relative bg-ink text-white px-4 pt-16 pb-14 overflow-hidden -mt-20">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto pt-24">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-5">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Blog
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-slate-400 text-lg">
            Consejos de diseño web, SEO y presencia digital para negocios en Gran Canaria.
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-slate-400">Pronto publicaremos nuestros primeros artículos.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-ink/10 pb-8">
                <time className="text-sm text-slate-400">
                  {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="font-display text-2xl font-semibold text-ink mt-2 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent font-medium hover:underline"
                >
                  Leer artículo →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

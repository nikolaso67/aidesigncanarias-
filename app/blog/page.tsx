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
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-slate-500 mb-12 text-lg">
          Consejos de diseño web, SEO y presencia digital para negocios en Gran Canaria.
        </p>

        {posts.length === 0 ? (
          <p className="text-slate-400">Pronto publicaremos nuestros primeros artículos.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-slate-100 pb-8">
                <time className="text-sm text-slate-400">
                  {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-2xl font-semibold text-slate-900 mt-2 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-indigo-600 font-medium hover:underline"
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

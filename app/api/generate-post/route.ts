import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { put } from "@vercel/blob";

const client = new Anthropic();

const TOPIC_POOL = [
  "cuánto cuesta una página web en Gran Canaria",
  "por qué los negocios locales de Las Palmas necesitan una web profesional",
  "SEO local para negocios en Canarias: guía completa",
  "cómo crear una tienda online en Gran Canaria paso a paso",
  "ventajas de tener chatbot con IA en tu negocio local",
  "errores comunes en webs de negocios canarios",
  "cómo aparecer en Google si tienes un negocio en Gran Canaria",
  "diferencia entre web en Shopify y web profesional propia",
  "branding para pequeños negocios en Las Palmas",
  "por qué tu negocio necesita Google Business Profile en Canarias",
  "cómo mejorar la presencia digital de una ferretería en Gran Canaria",
  "diseño web para restaurantes en Las Palmas: qué debe incluir",
  "inteligencia artificial para negocios locales en Canarias",
  "cómo conseguir reseñas en Google para tu negocio en Gran Canaria",
  "web profesional vs redes sociales: qué necesita tu negocio en Canarias",
  "mantenimiento web: por qué es clave para negocios en Las Palmas",
  "cuánto tarda en posicionarse una web nueva en Gran Canaria",
  "publicidad digital para pequeños negocios en Canarias",
  "PWA vs app nativa: qué conviene a los negocios canarios",
  "diseño web accesible para negocios en Las Palmas",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

async function generatePost(req: NextRequest) {
  // Protect: only Vercel Cron (sends Authorization: Bearer <CRON_SECRET>)
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Pick a topic based on day of year to avoid repeats
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const topic = TOPIC_POOL[dayOfYear % TOPIC_POOL.length];
  const publishedAt = new Date().toISOString();
  const slug = `${slugify(topic)}-${new Date().toISOString().slice(0, 10)}`;

  const prompt = `Eres un experto en SEO local especializado en negocios de Gran Canaria, España.

Escribe un artículo de blog SEO-optimizado sobre: "${topic}"

El artículo debe:
- Estar dirigido a propietarios de pequeños negocios en Gran Canaria
- Tener entre 600 y 800 palabras
- Incluir el topic principal y variaciones de la keyword de forma natural
- Mencionar localidades de Gran Canaria (Las Palmas, Maspalomas, Playa del Inglés, etc.) donde tenga sentido
- Usar encabezados H2 y H3 con Markdown
- Terminar con una llamada a la acción para contactar con AI Design Canarias (aidesigncanarias.com)
- Estar escrito en español de España, tono profesional pero cercano

Responde SOLO con JSON válido con este formato exacto:
{
  "title": "título del artículo (máx 60 caracteres, incluye keyword principal)",
  "description": "meta description (máx 155 caracteres, incluye keyword)",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "content": "contenido completo en Markdown"
}`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return NextResponse.json({ error: "Invalid response from Claude" }, { status: 500 });
  }

  const postData = JSON.parse(jsonMatch[0]);
  const post = { slug, publishedAt, ...postData };

  await put(`blog/${slug}.json`, JSON.stringify(post), {
    access: "public",
    contentType: "application/json",
  });

  return NextResponse.json({ success: true, slug, title: post.title });
}

export const GET = generatePost;
export const POST = generatePost;

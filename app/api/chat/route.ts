import Anthropic from "@anthropic-ai/sdk";
import { rateLimit, getIP } from "@/lib/ratelimit";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Eres el asistente virtual de AI Design Canarias, una agencia de diseño web e inteligencia artificial con sede en Gran Canaria, Islas Canarias.

Tu función es atender a potenciales clientes que visitan la web, resolver sus dudas y animarles a solicitar un presupuesto.

Sobre la empresa:
- Fundada por Niko, diseñador y desarrollador con sede en Gran Canaria
- Especializada en negocios locales de las Islas Canarias
- Servicios: diseño web profesional, integración de IA y chatbots, SEO y posicionamiento, tiendas online, branding, apps web progresivas, mantenimiento web, consultoría digital
- Entrega en 7-14 días según el proyecto
- Presupuestos personalizados, sin precios fijos publicados
- Soporte en español, sin permanencia

Cómo responder:
- Siempre en español, tono cercano y profesional
- Respuestas cortas y directas (máximo 3-4 líneas)
- Si preguntan por precio, explica que los presupuestos son personalizados y anima a contactar
- Si el cliente parece interesado, sugiere que rellene el formulario de contacto o escriba a Niko directamente
- No inventes datos ni hagas promesas de resultados concretos que no puedas garantizar`;

const WHITELISTED_IPS = (process.env.WHITELISTED_IPS ?? "").split(",").map((ip) => ip.trim()).filter(Boolean);
const CHAT_LIMIT = 20;
const CHAT_WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_MESSAGE_LENGTH = 500;
const MAX_MESSAGES_IN_HISTORY = 20;

export async function POST(request: Request) {
  const ip = getIP(request);

  if (ip === "unknown") {
    return Response.json({ error: "Petición inválida." }, { status: 429 });
  }

  // Rate limiting — skip for whitelisted IPs
  if (!WHITELISTED_IPS.includes(ip)) {
    const { allowed } = rateLimit(ip, "chat", CHAT_LIMIT, CHAT_WINDOW_MS);
    if (!allowed) {
      return Response.json(
        { error: "Has alcanzado el límite de mensajes. Inténtalo en una hora." },
        { status: 429 }
      );
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Petición inválida." }, { status: 400 });
  }
  const { messages } = body as { messages?: unknown };
  // Validate messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Mensaje inválido." }, { status: 400 });
  }

  // Limit history and message length
  const sanitized: { role: "user" | "assistant"; content: string }[] = messages
    .slice(-MAX_MESSAGES_IN_HISTORY)
    .filter((m: { role: string; content: string }) => m.role && typeof m.content === "string")
    .map((m: { role: string; content: string }) => ({
      role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
      content: m.content.slice(0, MAX_MESSAGE_LENGTH),
    }));

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 400,
    system: SYSTEM_PROMPT,
    messages: sanitized,
  });

  const reply =
    response.content[0].type === "text" ? response.content[0].text : "";

  return Response.json({ reply });
}

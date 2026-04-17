import { Resend } from "resend";
import { rateLimit, getIP } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_LIMIT = 5;
const CONTACT_WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_FIELD_LENGTH = 1000;
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]{1,64}@[a-zA-Z0-9.\-]{1,253}\.[a-zA-Z]{2,}$/;

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: Request) {
  const ip = getIP(request);

  if (ip === "unknown") {
    return Response.json({ error: "Petición inválida." }, { status: 429 });
  }

  const { allowed } = rateLimit(ip, "contact", CONTACT_LIMIT, CONTACT_WINDOW_MS);
  if (!allowed) {
    return Response.json(
      { error: "Demasiados intentos. Inténtalo en una hora." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Petición inválida." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const nombre = sanitize(b.nombre, 100);
  const email = sanitize(b.email, 200);
  const telefono = sanitize(b.telefono, 20);
  const mensaje = sanitize(b.mensaje, MAX_FIELD_LENGTH);

  if (!nombre || !email || !mensaje) {
    return Response.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Email inválido." }, { status: 400 });
  }

  await resend.emails.send({
    from: "AI Design Canarias <info@aidesigncanarias.com>",
    to: "info@aidesigncanarias.com",
    subject: `Nuevo mensaje de ${escapeHtml(nombre)}`,
    html: `
      <h2>Nuevo mensaje desde aidesigncanarias.com</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "No proporcionado")}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje)}</p>
    `,
    replyTo: email,
  });

  return Response.json({ ok: true });
}

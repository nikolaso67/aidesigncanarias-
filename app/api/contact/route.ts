import { Resend } from "resend";
import { rateLimit, getIP } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_LIMIT = 5;
const CONTACT_WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_FIELD_LENGTH = 1000;

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  const ip = getIP(request);

  const { allowed } = rateLimit(ip, "contact", CONTACT_LIMIT, CONTACT_WINDOW_MS);
  if (!allowed) {
    return Response.json(
      { error: "Demasiados intentos. Inténtalo en una hora." },
      { status: 429 }
    );
  }

  const body = await request.json();

  const nombre = sanitize(body.nombre, 100);
  const email = sanitize(body.email, 200);
  const telefono = sanitize(body.telefono, 20);
  const mensaje = sanitize(body.mensaje, MAX_FIELD_LENGTH);

  if (!nombre || !email || !mensaje) {
    return Response.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Email inválido." }, { status: 400 });
  }

  await resend.emails.send({
    from: "AI Design Canarias <info@aidesigncanarias.com>",
    to: "info@aidesigncanarias.com",
    subject: `Nuevo mensaje de ${nombre}`,
    html: `
      <h2>Nuevo mensaje desde aidesigncanarias.com</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
    replyTo: email,
  });

  return Response.json({ ok: true });
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, email, telefono, mensaje } = await request.json();

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

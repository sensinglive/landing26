import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, institution, phone, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
      console.error("CONTACT_EMAIL env var not set");
      return NextResponse.json(
        { error: "Erro de configuração do servidor." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Sensing LP <onboarding@resend.dev>",
      to: contactEmail.split(",").map((e) => e.trim()),
      subject: `Novo contato: ${name}`,
      html: `
        <h2>Novo lead via Landing Page</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Nome</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Telefone</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Instituição / Cidade</td><td style="padding:8px 0;">${institution || "—"}</td></tr>
          ${message ? `<tr><td style="padding:8px 16px 8px 0;color:#666;vertical-align:top;">Mensagem</td><td style="padding:8px 0;">${message}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}

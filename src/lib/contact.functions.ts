import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(40),
  email: z.string().trim().email().max(255),
  city: z.string().trim().max(120).optional().default(""),
  reformType: z.string().trim().min(1).max(60),
  message: z.string().trim().min(5).max(4000),
  extra: z.record(z.string().max(200)).default({}),
  photoUrls: z.array(z.string().max(500)).max(5).default([]),
  locale: z.enum(["es", "en"]).default("es"),
  sourcePage: z.string().trim().max(200).optional().default(""),
  // Honeypot: must stay empty for real humans.
  companyWebsite: z.string().max(200).optional().default(""),
});

export type ContactSubmissionInput = z.input<typeof submissionSchema>;

const RECIPIENTS = ["dm.reformasinnovamos@gmail.com", "backtobusiness.eu@gmail.com"];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: z.output<typeof submissionSchema>) {
  const rows: [string, string][] = [
    ["Nombre", data.name],
    ["Teléfono", data.phone],
    ["Email", data.email],
    ["Ciudad / zona", data.city || "—"],
    ["Tipo de reforma", data.reformType],
    ["Idioma del visitante", data.locale.toUpperCase()],
    ["Página de origen", data.sourcePage || "—"],
    ...Object.entries(data.extra).map(([key, value]) => [key, value] as [string, string]),
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${escapeHtml(
          label,
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const photosHtml = data.photoUrls.length
    ? `<p style="margin-top:16px"><strong>Fotos adjuntas:</strong><br>${data.photoUrls
        .map((url) => `<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>`)
        .join("<br>")}</p>`
    : "";

  return `<div style="font-family:Arial,sans-serif;color:#1f2937;max-width:640px">
    <h2 style="color:#1f2937">Nueva solicitud de presupuesto — DM Reformas</h2>
    <table style="border-collapse:collapse;width:100%">${rowsHtml}</table>
    <h3 style="margin-top:20px">Mensaje</h3>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    ${photosHtml}
    <p style="margin-top:24px;color:#6b7280;font-size:12px">Enviado automáticamente desde el sitio web de DM Reformas.</p>
  </div>`;
}

async function sendNotificationEmail(data: z.output<typeof submissionSchema>): Promise<boolean> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const resendKey = process.env["RESEND_API_KEY"];
  if (!lovableKey || !resendKey) {
    console.warn("[contact] email provider not configured yet — submission stored in database only");
    return false;
  }

  try {
    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: "DM Reformas <contacto@reformasorihuelacosta.com>",
        to: RECIPIENTS,
        reply_to: data.email,
        subject: `Nueva solicitud (${data.reformType}) — ${data.name}`,
        html: buildEmailHtml(data),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`[contact] email provider failed [${response.status}]: ${body}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[contact] email provider error", error);
    return false;
  }
}

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: ContactSubmissionInput) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled in => silently discard, bots get a success response.
    if (data.companyWebsite.trim().length > 0) {
      return { ok: true as const, spam: true as const };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const emailSent = await sendNotificationEmail(data);

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city || null,
      reform_type: data.reformType,
      message: data.message,
      extra: data.extra,
      photo_urls: data.photoUrls,
      locale: data.locale,
      source_page: data.sourcePage || null,
      email_sent: emailSent,
    });

    if (error) {
      console.error("[contact] database insert failed", error);
      if (!emailSent) throw new Error("submission_failed");
    }

    return { ok: true as const, emailSent };
  });

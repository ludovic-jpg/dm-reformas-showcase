import { MessageCircle } from "lucide-react";

import { company } from "@/lib/site";
import { dictionaries, type Locale } from "@/lib/i18n";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const text =
    locale === "es"
      ? "Hola DM Reformas, me gustaría pedir un presupuesto para mi reforma."
      : "Hello DM Reformas, I would like to request a quote for my renovation.";

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.whatsappAria}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">{t.common.whatsapp}</span>
    </a>
  );
}

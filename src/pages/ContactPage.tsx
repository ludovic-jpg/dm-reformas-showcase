import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ContactForm } from "@/components/site/ContactForm";
import { company, images, serviceAreas } from "@/lib/site";
import { dictionaries, type Locale } from "@/lib/i18n";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const waText =
    locale === "es"
      ? "Hola DM Reformas, me gustaría pedir un presupuesto."
      : "Hello DM Reformas, I would like to request a quote.";

  return (
    <SiteLayout locale={locale} page="contact">
      <PageHero
        title={t.contact.heroTitle}
        text={t.contact.heroText}
        image={images.bano}
        alt={
          locale === "es"
            ? "Baño reformado por DM Reformas en Torrevieja"
            : "Bathroom renovated by DM Reformas in Torrevieja"
        }
      />

      <section className="section-y" id="presupuesto">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.contact.infoTitle}</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`tel:${company.phoneHref}`} className="font-medium">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all font-medium">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-muted-foreground">
                  {company.city}, {company.region}
                </span>
              </li>
            </ul>

            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-[filter] hover:brightness-105"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {t.common.whatsapp}
            </a>

            <h2 className="accent-rule mt-10 text-xl font-bold">{t.contact.hoursTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.contact.hours.map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <Clock className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>

            <h2 className="accent-rule mt-10 text-xl font-bold">{t.contact.mapTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{serviceAreas.join(" · ")}</p>
            <div className="mt-4 overflow-hidden rounded-lg border border-border shadow-soft">
              <iframe
                title={t.contact.mapTitle}
                src="https://www.google.com/maps?q=Torrevieja,Alicante,Spain&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </div>

          <div>
            <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.contact.formTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t.contact.formText}</p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

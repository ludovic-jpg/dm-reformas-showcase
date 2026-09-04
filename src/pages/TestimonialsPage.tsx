import { Quote, Star } from "lucide-react";

import { SiteLayout, PageHero, CtaBanner } from "@/components/site/SiteLayout";
import { company, images, testimonials } from "@/lib/site";
import { contactPathWithType, dictionaries, type Locale } from "@/lib/i18n";

export function TestimonialsPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const average = (
    testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <SiteLayout locale={locale} page="testimonials">
      <PageHero
        kicker={t.home.testimonialsKicker}
        title={t.testimonials.heroTitle}
        text={t.testimonials.heroText}
        image={images.cocina}
        alt={
          locale === "es"
            ? "Cocina reformada por DM Reformas para un cliente en Orihuela Costa"
            : "Kitchen renovated by DM Reformas for a client in Orihuela Costa"
        }
      />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-6 rounded-lg border border-border bg-card p-6">
            <div>
              <p className="font-display text-4xl font-bold text-accent">{average}/5</p>
              <p className="text-sm text-muted-foreground">{t.testimonials.averageLabel}</p>
            </div>
            <div className="h-12 w-px bg-border" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-xl font-bold text-foreground">
                {testimonials.length}
              </span>{" "}
              {t.testimonials.reviewsLabel}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.id} className="rounded-lg border border-border bg-card p-6">
                <Quote className="size-6 text-accent" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5" aria-label={`${item.rating}/5`}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="size-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text[locale]}</p>
                <footer className="mt-4 text-sm font-semibold">
                  {item.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {item.city} · {item.type[locale]}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={t.home.ctaTitle}
        text={t.home.ctaText}
        ctaLabel={t.common.quoteCta}
        ctaHref={contactPathWithType(locale, "otro")}
        secondaryLabel={`${t.common.callUs} ${company.phone}`}
        secondaryHref={`tel:${company.phoneHref}`}
      />
    </SiteLayout>
  );
}

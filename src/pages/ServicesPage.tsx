import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/site/LocaleLink";
import { SiteLayout, PageHero, CtaBanner } from "@/components/site/SiteLayout";
import { company, images, services } from "@/lib/site";
import { contactPathWithType, dictionaries, type Locale } from "@/lib/i18n";

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <SiteLayout locale={locale} page="services">
      <PageHero
        kicker={t.home.servicesKicker}
        title={t.services.heroTitle}
        text={t.services.heroText}
        image={images.fachada}
        alt={
          locale === "es"
            ? "Operarios de DM Reformas rehabilitando una fachada en la Costa Blanca"
            : "DM Reformas workers restoring a facade on the Costa Blanca"
        }
      />

      <section className="section-y">
        <div className="container-page space-y-14">
          {services.map((service, index) => {
            const copy = t.services.items[service.id];
            const reversed = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <img
                  src={service.image}
                  alt={service.alt[locale]}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className={`w-full rounded-lg object-cover shadow-soft ${reversed ? "lg:order-2" : ""}`}
                />
                <div>
                  <h2 className="accent-rule text-2xl font-bold md:text-3xl">{copy.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{copy.description}</p>
                  <ul className="mt-5 space-y-2">
                    {copy.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="cta" className="mt-6">
                    <LocaleLink to={contactPathWithType(locale, service.id)}>
                      {t.services.ctaLabel}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </LocaleLink>
                  </Button>
                </div>
              </article>
            );
          })}
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

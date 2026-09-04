import { ShieldCheck, MapPin } from "lucide-react";

import { SiteLayout, PageHero, CtaBanner } from "@/components/site/SiteLayout";
import { company, images, serviceAreas } from "@/lib/site";
import { contactPathWithType, dictionaries, type Locale } from "@/lib/i18n";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <SiteLayout locale={locale} page="about">
      <PageHero
        kicker={t.home.aboutKicker}
        title={t.about.heroTitle}
        text={t.about.heroText}
        image={images.office}
        alt={
          locale === "es"
            ? "Equipo técnico de DM Reformas revisando planos de un proyecto"
            : "DM Reformas technical team reviewing project drawings"
        }
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.about.storyTitle}</h2>
            {t.about.story.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <img
            src={images.artisan}
            alt={
              locale === "es"
                ? "Operario de DM Reformas montando una estructura en obra"
                : "DM Reformas worker assembling a structure on site"
            }
            width={1139}
            height={928}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="section-y bg-muted">
        <div className="container-page">
          <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.about.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.about.methodTitle}</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.about.method.map((step) => (
              <li key={step.step} className="rounded-lg border border-border bg-card p-6">
                <span className="font-display text-3xl font-bold text-accent">{step.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-muted">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.about.guaranteesTitle}</h2>
            <ul className="mt-6 space-y-3">
              {t.about.guarantees.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="accent-rule text-2xl font-bold md:text-3xl">{t.common.serviceArea}</h2>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {serviceAreas.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm"
                >
                  <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title={t.home.ctaTitle}
        text={t.home.ctaText}
        ctaLabel={t.common.quoteCta}
        ctaHref={contactPathWithType(locale, "integral")}
        secondaryLabel={`${t.common.callUs} ${company.phone}`}
        secondaryHref={`tel:${company.phoneHref}`}
      />
    </SiteLayout>
  );
}

import {
  ArrowRight,
  Building2,
  ChefHat,
  HardHat,
  Home,
  MapPin,
  PaintRoller,
  Quote,
  Ruler,
  ShieldCheck,
  ShowerHead,
  Star,
  Store,
  Waves,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/site/LocaleLink";
import { SiteLayout, CtaBanner } from "@/components/site/SiteLayout";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { company, images, projects, serviceAreas, services, testimonials } from "@/lib/site";
import { contactPathWithType, dictionaries, path, type Locale } from "@/lib/i18n";

const icons: Record<string, typeof Home> = {
  Home,
  ChefHat,
  ShowerHead,
  Building2,
  HardHat,
  Waves,
  Ruler,
  PaintRoller,
  Wrench,
  Store,
};

export function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const featured = projects.slice(0, 3);

  return (
    <SiteLayout locale={locale} page="home">
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={images.homeHero}
          alt={
            locale === "es"
              ? "Profesional de DM Reformas trabajando en una reforma en Torrevieja"
              : "DM Reformas professional working on a renovation in Torrevieja"
          }
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-page relative py-24 text-surface-foreground md:py-36">
          <p className="eyebrow">{t.home.heroKicker}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-4 font-display text-xl text-accent md:text-2xl">{company.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-90 md:text-lg">
            {t.home.heroText}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <LocaleLink to={path(locale, "contact")}>
                {t.common.quoteCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </LocaleLink>
            </Button>
            <Button asChild variant="hero" size="lg">
              <LocaleLink to={path(locale, "projects")}>{t.home.heroSecondary}</LocaleLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {t.home.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-accent md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-y">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.home.aboutKicker}</p>
            <h2 className="accent-rule mt-3 text-2xl font-bold md:text-4xl">{t.home.aboutTitle}</h2>
            {t.home.aboutText.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <Button asChild variant="outline" className="mt-6">
              <LocaleLink to={path(locale, "about")}>{t.nav.about}</LocaleLink>
            </Button>
          </div>
          <img
            src={images.artisan}
            alt={
              locale === "es"
                ? "Profesional de DM Reformas trabajando en una obra en Torrevieja"
                : "DM Reformas professional working on a site in Torrevieja"
            }
            width={1139}
            height={928}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-y bg-muted">
        <div className="container-page">
          <p className="eyebrow">{t.home.servicesKicker}</p>
          <h2 className="accent-rule mt-3 text-2xl font-bold md:text-4xl">{t.home.servicesTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.home.servicesText}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = icons[service.icon] ?? Home;
              const copy = t.services.items[service.id];
              return (
                <LocaleLink
                  key={service.id}
                  to={path(locale, "services")}
                  className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lift"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    {t.common.seeMore}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </LocaleLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.home.areaKicker}</p>
            <h2 className="accent-rule mt-3 text-2xl font-bold md:text-4xl">{t.home.areaTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.home.areaText}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
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
          <div className="overflow-hidden rounded-lg border border-border shadow-soft">
            <iframe
              title={t.contact.mapTitle}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.95%2C37.85%2C-0.55%2C38.10&amp;layer=mapnik&amp;marker=37.9787%2C-0.6822"
              loading="lazy"
              className="h-80 w-full lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-y bg-muted">
        <div className="container-page">
          <p className="eyebrow">{t.home.projectsKicker}</p>
          <h2 className="accent-rule mt-3 text-2xl font-bold md:text-4xl">{t.home.projectsTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.home.projectsText}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <article key={project.id} className="rounded-lg border border-border bg-card p-4">
                <BeforeAfter
                  before={project.before}
                  after={project.after}
                  beforeLabel={t.common.before}
                  afterLabel={t.common.after}
                  hint={t.common.dragHint}
                  alt={project.alt[locale]}
                />
                <h3 className="mt-4 font-display text-base font-semibold">{project.title[locale]}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.city}</p>
              </article>
            ))}
          </div>

          <Button asChild variant="outline" className="mt-8">
            <LocaleLink to={path(locale, "projects")}>{t.common.seeAll}</LocaleLink>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-page">
          <p className="eyebrow">{t.home.testimonialsKicker}</p>
          <h2 className="accent-rule mt-3 text-2xl font-bold md:text-4xl">
            {t.home.testimonialsTitle}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <blockquote key={item.id} className="rounded-lg border border-border bg-card p-6">
                <Quote className="size-6 text-accent" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5" aria-label={`${item.rating}/5`}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="size-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text[locale]}</p>
                <footer className="mt-4 text-sm font-semibold">
                  {item.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {item.city} · {item.type[locale]}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild variant="outline">
              <LocaleLink to={path(locale, "testimonials")}>{t.nav.testimonials}</LocaleLink>
            </Button>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              {t.about.guaranteesTitle}
            </p>
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

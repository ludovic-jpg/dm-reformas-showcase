import { useMemo, useState } from "react";
import { CalendarClock, MapPin } from "lucide-react";

import { SiteLayout, PageHero, CtaBanner } from "@/components/site/SiteLayout";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { company, images, projects } from "@/lib/site";
import { contactPathWithType, dictionaries, type Locale } from "@/lib/i18n";
import type { ReformType } from "@/lib/site";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const [filter, setFilter] = useState<ReformType | "all">("all");

  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => project.category))),
    [],
  );
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteLayout locale={locale} page="projects">
      <PageHero
        kicker={t.home.projectsKicker}
        title={t.projects.heroTitle}
        text={t.projects.heroText}
        image={images.terraza}
        alt={
          locale === "es"
            ? "Terraza con pérgola reformada por DM Reformas"
            : "Terrace with pergola renovated by DM Reformas"
        }
      />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.projects.filterAll}>
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
              {t.projects.filterAll}
            </FilterChip>
            {categories.map((category) => (
              <FilterChip
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {t.projects.filters[category] ?? t.services.items[category].title}
              </FilterChip>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {visible.map((project) => (
              <article key={project.id} className="rounded-lg border border-border bg-card p-5">
                <BeforeAfter
                  before={project.before}
                  after={project.after}
                  beforeLabel={t.common.before}
                  afterLabel={t.common.after}
                  hint={t.common.dragHint}
                  alt={project.alt[locale]}
                />
                <h2 className="mt-4 font-display text-lg font-semibold">{project.title[locale]}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description[locale]}
                </p>
                <dl className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                    <dt className="sr-only">{t.common.location}</dt>
                    <dd>{project.city}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CalendarClock className="size-3.5 text-accent" aria-hidden="true" />
                    <dt className="sr-only">{t.common.duration}</dt>
                    <dd>{project.duration}</dd>
                  </div>
                </dl>
              </article>
            ))}
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

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-card hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

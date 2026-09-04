import { useEffect, useState } from "react";
import { Menu, Phone, X, Languages } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/site/LocaleLink";
import { company, images } from "@/lib/site";
import { dictionaries, otherLocale, path, routePaths, type Locale, type PageKey } from "@/lib/i18n";

const navKeys: Exclude<PageKey, "legal" | "privacy" | "cookies">[] = [
  "home",
  "services",
  "projects",
  "about",
  "testimonials",
  "contact",
];

export function Header({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = dictionaries[locale];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const alt = otherLocale(locale);
  const altHref = routePaths[alt][page];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <LocaleLink to={path(locale, "home")} className="flex items-center gap-3">
          <img
            src={images.logo}
            alt={`${company.name} — ${company.tagline}`}
            width={48}
            height={48}
            className="h-11 w-11 rounded-sm bg-surface object-contain p-1"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">{company.name}</span>
            <span className="text-[11px] tracking-wide text-muted-foreground">{company.tagline}</span>
          </span>
        </LocaleLink>

        <nav aria-label={t.common.menu} className="hidden items-center gap-1 lg:flex">
          {navKeys.map((key) => (
            <LocaleLink
              key={key}
              to={path(locale, key)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                page === key ? "text-accent" : "text-foreground"
              }`}
            >
              {t.nav[key]}
            </LocaleLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LocaleLink
            to={altHref}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-muted"
            aria-label={`${t.common.languageLabel}: ${t.common.switchTo}`}
            hrefLang={alt}
          >
            <Languages className="size-4" aria-hidden="true" />
            {alt.toUpperCase()}
          </LocaleLink>
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${company.phoneHref}`}>
              <Phone className="size-4" aria-hidden="true" />
              {company.phone}
            </a>
          </Button>
          <Button asChild variant="cta" size="sm">
            <LocaleLink to={path(locale, "contact")}>{t.common.quoteCtaShort}</LocaleLink>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label={open ? t.common.close : t.common.menu}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label={t.common.menu} className="container-page flex flex-col py-3">
            {navKeys.map((key) => (
              <LocaleLink
                key={key}
                to={path(locale, key)}
                className={`rounded-md px-2 py-3 text-base font-medium ${
                  page === key ? "text-accent" : "text-foreground"
                }`}
              >
                {t.nav[key]}
              </LocaleLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <LocaleLink
                to={altHref}
                hrefLang={alt}
                className="inline-flex items-center gap-2 rounded-md px-2 py-3 text-sm font-semibold"
              >
                <Languages className="size-4" aria-hidden="true" />
                {t.common.switchTo}
              </LocaleLink>
              <Button asChild variant="outline">
                <a href={`tel:${company.phoneHref}`}>
                  <Phone className="size-4" aria-hidden="true" />
                  {company.phone}
                </a>
              </Button>
              <Button asChild variant="cta">
                <LocaleLink to={path(locale, "contact")}>{t.common.quoteCta}</LocaleLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

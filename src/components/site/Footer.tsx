import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

import { LocaleLink } from "@/components/site/LocaleLink";
import { company, images, serviceAreas } from "@/lib/site";
import { dictionaries, path, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="surface-panel">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt={`${company.name} logo`}
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-display text-lg font-bold">{company.name}</p>
              <p className="text-xs opacity-70">{company.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80">{t.footer.about}</p>
          <div className="mt-4 flex gap-2">
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-md border border-sidebar-border transition-colors hover:bg-sidebar-accent"
            >
              <Instagram className="size-4" aria-hidden="true" />
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-md border border-sidebar-border transition-colors hover:bg-sidebar-accent"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label={t.footer.quickLinks}>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            {t.footer.quickLinks}
          </p>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            {(["home", "services", "projects", "about", "testimonials", "contact"] as const).map((key) => (
              <li key={key}>
                <LocaleLink to={path(locale, key)} className="transition-opacity hover:opacity-100">
                  {t.nav[key]}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-3 text-sm opacity-85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {company.city}, {company.region}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="break-all">
                {company.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-widest opacity-60">{t.common.serviceArea}</p>
          <p className="mt-1 text-xs opacity-75">{serviceAreas.join(" · ")}</p>
        </div>

        <nav aria-label={t.footer.legalLinks}>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            {t.footer.legalLinks}
          </p>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li>
              <LocaleLink to={path(locale, "legal")}>{t.legalPages.legal.title}</LocaleLink>
            </li>
            <li>
              <LocaleLink to={path(locale, "privacy")}>{t.legalPages.privacy.title}</LocaleLink>
            </li>
            <li>
              <LocaleLink to={path(locale, "cookies")}>{t.legalPages.cookies.title}</LocaleLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. {t.footer.rights}
          </p>
          <p>{t.footer.builtIn}</p>
        </div>
      </div>
    </footer>
  );
}

import { company, serviceAreas } from "./site";
import { dictionaries, otherLocale, routePaths, type Locale, type PageKey } from "./i18n";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  slogan: company.tagline,
  description:
    "Empresa de reformas integrales y construcción en Torrevieja (Alicante): cocinas, baños, fachadas, cubiertas, piscinas, ampliaciones y locales comerciales en toda la Costa Blanca.",
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: company.city,
    addressRegion: "Alicante",
    postalCode: company.postalCode,
    addressCountry: company.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: company.lat, longitude: company.lng },
  areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
  knowsLanguage: ["es", "en"],
  sameAs: [company.social.instagram, company.social.facebook],
};

/** Per-route head(): unique title/description, canonical and hreflang alternates. */
export function pageHead(locale: Locale, page: PageKey, extraJsonLd?: unknown) {
  const meta = dictionaries[locale].meta[page];
  const self = routePaths[locale][page];
  const alt = otherLocale(locale);
  const altHref = routePaths[alt][page];

  const scripts = [
    {
      type: "application/ld+json",
      children: JSON.stringify(extraJsonLd ?? localBusinessJsonLd),
    },
  ];

  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: page === "home" ? "website" : "article" },
      { property: "og:locale", content: locale === "es" ? "es_ES" : "en_GB" },
      { property: "og:url", content: self },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: self },
      { rel: "alternate", hrefLang: locale, href: self },
      { rel: "alternate", hrefLang: alt, href: altHref },
      { rel: "alternate", hrefLang: "x-default", href: routePaths.es[page] },
    ],
    scripts,
  };
}

import { company, serviceAreas } from "./site";
import { dictionaries, otherLocale, routePaths, type Locale, type PageKey } from "./i18n";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://reformasorihuelacosta.com/#business",
  url: "https://reformasorihuelacosta.com/",
  image: "https://reformasorihuelacosta.com/og-image.jpg",
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
  sameAs: [company.social.instagram],
};

export const SITE_URL = "https://reformasorihuelacosta.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}` || SITE_URL;

/** Per-route head(): unique title/description, canonical and hreflang alternates. */
export function pageHead(locale: Locale, page: PageKey, extraJsonLd?: unknown) {
  const meta = dictionaries[locale].meta[page];
  const self = abs(routePaths[locale][page]) || SITE_URL;
  const alt = otherLocale(locale);
  const altHref = abs(routePaths[alt][page]);

  const scripts = [
    {
      type: "application/ld+json",
      children: JSON.stringify(extraJsonLd ?? localBusinessJsonLd),
    },
  ];

  if (page !== "home") {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dictionaries[locale].nav.home,
            item: abs(routePaths[locale].home) || SITE_URL,
          },
          { "@type": "ListItem", position: 2, name: meta.title, item: self },
        ],
      }),
    });
  }

  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: page === "home" ? "website" : "article" },
      { property: "og:locale", content: locale === "es" ? "es_ES" : "en_GB" },
      { property: "og:locale:alternate", content: alt === "es" ? "es_ES" : "en_GB" },
      { property: "og:site_name", content: company.name },
      { property: "og:url", content: self },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "geo.region", content: "ES-A" },
      { name: "geo.placename", content: company.city },
    ],
    links: [
      { rel: "canonical", href: self },
      { rel: "alternate", hrefLang: locale, href: self },
      { rel: "alternate", hrefLang: alt, href: altHref },
      { rel: "alternate", hrefLang: "x-default", href: abs(routePaths.es[page]) || SITE_URL },
    ],
    scripts,
  };
}


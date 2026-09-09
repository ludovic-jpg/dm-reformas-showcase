import { createFileRoute } from "@tanstack/react-router";

import { locales, routePaths, type PageKey } from "@/lib/i18n";

const SITE_URL = "https://reformasorihuelacosta.com";

const pages: { page: PageKey; priority: string }[] = [
  { page: "home", priority: "1.0" },
  { page: "services", priority: "0.9" },
  { page: "projects", priority: "0.8" },
  { page: "about", priority: "0.7" },
  { page: "testimonials", priority: "0.6" },
  { page: "contact", priority: "0.9" },
  { page: "legal", priority: "0.2" },
  { page: "privacy", priority: "0.2" },
  { page: "cookies", priority: "0.2" },
];

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = locales
    .flatMap((locale) =>
      pages.map(({ page, priority }) => {
        const loc = `${SITE_URL}${routePaths[locale][page]}`;
        const alternates = locales
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL}${routePaths[alt][page]}"/>`,
          )
          .concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${routePaths.es[page]}"/>`,
          )
          .join("\n");
        return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
      }),
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});

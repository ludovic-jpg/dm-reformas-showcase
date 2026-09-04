import { SiteLayout } from "@/components/site/SiteLayout";
import { dictionaries, type Locale } from "@/lib/i18n";

type LegalKey = "legal" | "privacy" | "cookies";

export function LegalPage({ locale, page }: { locale: Locale; page: LegalKey }) {
  const t = dictionaries[locale];
  const content = t.legalPages[page];

  return (
    <SiteLayout locale={locale} page={page}>
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-bold md:text-4xl">{content.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{content.updated}</p>

          <div className="mt-10 space-y-8">
            {content.blocks.map((block) => (
              <div key={block.heading}>
                <h2 className="font-display text-xl font-semibold">{block.heading}</h2>
                {block.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

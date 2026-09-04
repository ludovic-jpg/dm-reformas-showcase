import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CookieBanner } from "@/components/site/CookieBanner";
import type { Locale, PageKey } from "@/lib/i18n";

export function SiteLayout({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: PageKey;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} page={page} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
      <CookieBanner locale={locale} />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  text,
  image,
  alt,
}: {
  kicker?: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={900}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-page relative py-20 text-surface-foreground md:py-28">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-90 md:text-lg">{text}</p>
      </div>
    </section>
  );
}

export function CtaBanner({
  title,
  text,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section className="surface-panel">
      <div className="container-page flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed opacity-85 md:text-base">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={ctaHref}
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-soft transition-[filter] hover:brightness-110"
          >
            {ctaLabel}
          </a>
          <a
            href={secondaryHref}
            className="inline-flex h-12 items-center justify-center rounded-md border border-sidebar-border px-6 text-sm font-semibold transition-colors hover:bg-sidebar-accent"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

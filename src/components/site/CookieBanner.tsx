import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/site/LocaleLink";
import { dictionaries, path, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "dm-cookie-consent";

export function CookieBanner({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "all" | "necessary") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage blocked — banner simply reappears next visit */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.cookies.title}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card p-4 shadow-lift md:inset-x-4 md:bottom-4 md:rounded-lg md:border"
    >
      <div className="container-page flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold">{t.cookies.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.cookies.text}{" "}
            <LocaleLink to={path(locale, "cookies")} className="font-medium text-accent underline">
              {t.cookies.more}
            </LocaleLink>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm" onClick={() => decide("necessary")}>
            {t.cookies.reject}
          </Button>
          <Button variant="cta" size="sm" onClick={() => decide("all")}>
            {t.cookies.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}

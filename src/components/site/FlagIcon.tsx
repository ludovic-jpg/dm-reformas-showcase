import type { Locale } from "@/lib/i18n";

const flags: Record<Locale, { label: string; viewBox: string; paths: React.ReactNode }> = {
  es: {
    label: "Español",
    viewBox: "0 0 640 480",
    paths: (
      <>
        <path fill="#AA151B" d="M0 0h640v480H0z" />
        <path fill="#F1BF00" d="M0 120h640v240H0z" />
        <path fill="#AA151B" d="M0 160h640v160H0z" />
      </>
    ),
  },
  en: {
    label: "English",
    viewBox: "0 0 640 480",
    paths: (
      <>
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
        />
        <path
          fill="#C8102E"
          d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 49V0z"
        />
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
      </>
    ),
  },
};

export function FlagIcon({ locale, className }: { locale: Locale; className?: string }) {
  const flag = flags[locale];
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox={flag.viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{flag.label}</title>
      {flag.paths}
    </svg>
  );
}

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
  de: {
    label: "Deutsch",
    viewBox: "0 0 640 480",
    paths: (
      <>
        <path fill="#000" d="M0 0h640v160H0z" />
        <path fill="#DD0000" d="M0 160h640v160H0z" />
        <path fill="#FFCE00" d="M0 320h640v160H0z" />
      </>
    ),
  },
  no: {
    label: "Norsk",
    viewBox: "0 0 22 16",
    paths: (
      <>
        <path fill="#BA0C2F" d="M0 0h22v16H0z" />
        <path fill="#FFF" d="M6 0h4v16H6zM0 6h22v4H0z" />
        <path fill="#00205B" d="M7 0h2v16H7zM0 7h22v2H0z" />
      </>
    ),
  },
  sv: {
    label: "Svenska",
    viewBox: "0 0 16 10",
    paths: (
      <>
        <path fill="#006AA7" d="M0 0h16v10H0z" />
        <path fill="#FECC00" d="M5 0h2v10H5zM0 4h16v2H0z" />
      </>
    ),
  },
  pt: {
    label: "Português",
    viewBox: "0 0 600 400",
    paths: (
      <>
        <path fill="#FF0000" d="M0 0h600v400H0z" />
        <path fill="#006600" d="M0 0h240v400H0z" />
        <circle cx="240" cy="200" r="80" fill="#FFCC00" />
        <circle cx="240" cy="200" r="50" fill="#FF0000" />
        <path fill="#FFF" d="M215 170h50v45a25 25 0 0 1-50 0z" />
      </>
    ),
  },
  ru: {
    label: "Русский",
    viewBox: "0 0 9 6",
    paths: (
      <>
        <path fill="#FFF" d="M0 0h9v2H0z" />
        <path fill="#0039A6" d="M0 2h9v2H0z" />
        <path fill="#D52B1E" d="M0 4h9v2H0z" />
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
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{flag.label}</title>
      {flag.paths}
    </svg>
  );
}

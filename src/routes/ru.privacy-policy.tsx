import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/privacy-policy")({
  head: () => pageHead("ru", "privacy"),
  component: () => <LegalPage locale="ru" page="privacy" />,
});

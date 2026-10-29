import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/legal-notice")({
  head: () => pageHead("ru", "legal"),
  component: () => <LegalPage locale="ru" page="legal" />,
});

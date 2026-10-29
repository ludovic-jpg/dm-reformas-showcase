import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/legal-notice")({
  head: () => pageHead("pt", "legal"),
  component: () => <LegalPage locale="pt" page="legal" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/privacy-policy")({
  head: () => pageHead("pt", "privacy"),
  component: () => <LegalPage locale="pt" page="privacy" />,
});

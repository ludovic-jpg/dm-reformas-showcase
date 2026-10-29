import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sv/privacy-policy")({
  head: () => pageHead("sv", "privacy"),
  component: () => <LegalPage locale="sv" page="privacy" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/privacy-policy")({
  head: () => pageHead("no", "privacy"),
  component: () => <LegalPage locale="no" page="privacy" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/no/legal-notice")({
  head: () => pageHead("no", "legal"),
  component: () => <LegalPage locale="no" page="legal" />,
});

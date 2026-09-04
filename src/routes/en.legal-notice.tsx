import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/legal-notice")({
  head: () => pageHead("en", "legal"),
  component: () => <LegalPage locale="en" page="legal" />,
});

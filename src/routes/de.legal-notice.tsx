import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/legal-notice")({
  head: () => pageHead("de", "legal"),
  component: () => <LegalPage locale="de" page="legal" />,
});

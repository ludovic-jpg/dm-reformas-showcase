import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/privacy-policy")({
  head: () => pageHead("en", "privacy"),
  component: () => <LegalPage locale="en" page="privacy" />,
});

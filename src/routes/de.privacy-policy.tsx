import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/privacy-policy")({
  head: () => pageHead("de", "privacy"),
  component: () => <LegalPage locale="de" page="privacy" />,
});

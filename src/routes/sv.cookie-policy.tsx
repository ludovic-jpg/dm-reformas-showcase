import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sv/cookie-policy")({
  head: () => pageHead("sv", "cookies"),
  component: () => <LegalPage locale="sv" page="cookies" />,
});

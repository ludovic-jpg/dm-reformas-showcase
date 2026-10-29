import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/no/cookie-policy")({
  head: () => pageHead("no", "cookies"),
  component: () => <LegalPage locale="no" page="cookies" />,
});

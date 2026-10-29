import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/cookie-policy")({
  head: () => pageHead("pt", "cookies"),
  component: () => <LegalPage locale="pt" page="cookies" />,
});

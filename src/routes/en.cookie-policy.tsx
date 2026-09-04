import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/cookie-policy")({
  head: () => pageHead("en", "cookies"),
  component: () => <LegalPage locale="en" page="cookies" />,
});

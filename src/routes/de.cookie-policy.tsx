import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/cookie-policy")({
  head: () => pageHead("de", "cookies"),
  component: () => <LegalPage locale="de" page="cookies" />,
});

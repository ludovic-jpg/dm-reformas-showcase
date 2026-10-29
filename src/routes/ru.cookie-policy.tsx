import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/cookie-policy")({
  head: () => pageHead("ru", "cookies"),
  component: () => <LegalPage locale="ru" page="cookies" />,
});

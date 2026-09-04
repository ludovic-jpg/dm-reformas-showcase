import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => pageHead("es", "cookies"),
  component: () => <LegalPage locale="es" page="cookies" />,
});

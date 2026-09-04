import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => pageHead("es", "privacy"),
  component: () => <LegalPage locale="es" page="privacy" />,
});

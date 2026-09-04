import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/aviso-legal")({
  head: () => pageHead("es", "legal"),
  component: () => <LegalPage locale="es" page="legal" />,
});

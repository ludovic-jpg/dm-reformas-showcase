import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/pages/ServicesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () => pageHead("es", "services"),
  component: () => <ServicesPage locale="es" />,
});

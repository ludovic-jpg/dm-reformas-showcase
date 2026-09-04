import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/nosotros")({
  head: () => pageHead("es", "about"),
  component: () => <AboutPage locale="es" />,
});

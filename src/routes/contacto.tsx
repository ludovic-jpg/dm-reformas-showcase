import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => pageHead("es", "contact"),
  component: () => <ContactPage locale="es" />,
});

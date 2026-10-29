import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/contact")({
  head: () => pageHead("sv", "contact"),
  component: () => <ContactPage locale="sv" />,
});

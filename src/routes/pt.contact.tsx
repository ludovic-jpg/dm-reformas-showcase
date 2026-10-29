import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/contact")({
  head: () => pageHead("pt", "contact"),
  component: () => <ContactPage locale="pt" />,
});

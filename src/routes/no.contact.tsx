import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/no/contact")({
  head: () => pageHead("no", "contact"),
  component: () => <ContactPage locale="no" />,
});

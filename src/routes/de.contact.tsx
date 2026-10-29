import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/contact")({
  head: () => pageHead("de", "contact"),
  component: () => <ContactPage locale="de" />,
});

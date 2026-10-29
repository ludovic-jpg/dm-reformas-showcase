import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/contact")({
  head: () => pageHead("ru", "contact"),
  component: () => <ContactPage locale="ru" />,
});

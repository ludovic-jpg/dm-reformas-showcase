import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/pages/ServicesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/services")({
  head: () => pageHead("en", "services"),
  component: () => <ServicesPage locale="en" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/pages/ServicesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/services")({
  head: () => pageHead("no", "services"),
  component: () => <ServicesPage locale="no" />,
});

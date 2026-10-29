import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/pages/ServicesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/services")({
  head: () => pageHead("de", "services"),
  component: () => <ServicesPage locale="de" />,
});

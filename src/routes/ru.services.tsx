import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/pages/ServicesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/services")({
  head: () => pageHead("ru", "services"),
  component: () => <ServicesPage locale="ru" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/")({
  head: () => pageHead("pt", "home"),
  component: () => <HomePage locale="pt" />,
});

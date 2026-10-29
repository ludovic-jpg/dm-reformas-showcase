import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/")({
  head: () => pageHead("de", "home"),
  component: () => <HomePage locale="de" />,
});

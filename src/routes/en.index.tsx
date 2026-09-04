import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  head: () => pageHead("en", "home"),
  component: () => <HomePage locale="en" />,
});

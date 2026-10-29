import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/no/about")({
  head: () => pageHead("no", "about"),
  component: () => <AboutPage locale="no" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/about")({
  head: () => pageHead("en", "about"),
  component: () => <AboutPage locale="en" />,
});

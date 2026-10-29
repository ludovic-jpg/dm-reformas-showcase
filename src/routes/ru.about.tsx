import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/about")({
  head: () => pageHead("ru", "about"),
  component: () => <AboutPage locale="ru" />,
});

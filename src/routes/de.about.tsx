import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/about")({
  head: () => pageHead("de", "about"),
  component: () => <AboutPage locale="de" />,
});

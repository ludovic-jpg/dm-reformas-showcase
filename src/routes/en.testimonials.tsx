import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/testimonials")({
  head: () => pageHead("en", "testimonials"),
  component: () => <TestimonialsPage locale="en" />,
});

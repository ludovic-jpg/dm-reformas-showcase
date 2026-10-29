import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sv/testimonials")({
  head: () => pageHead("sv", "testimonials"),
  component: () => <TestimonialsPage locale="sv" />,
});

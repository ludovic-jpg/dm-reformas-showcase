import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/testimonials")({
  head: () => pageHead("pt", "testimonials"),
  component: () => <TestimonialsPage locale="pt" />,
});

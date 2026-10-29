import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/testimonials")({
  head: () => pageHead("no", "testimonials"),
  component: () => <TestimonialsPage locale="no" />,
});

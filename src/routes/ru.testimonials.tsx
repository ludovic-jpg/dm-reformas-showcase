import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/testimonials")({
  head: () => pageHead("ru", "testimonials"),
  component: () => <TestimonialsPage locale="ru" />,
});

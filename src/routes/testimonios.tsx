import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/testimonios")({
  head: () => pageHead("es", "testimonials"),
  component: () => <TestimonialsPage locale="es" />,
});

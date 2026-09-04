import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/pages/ProjectsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/proyectos")({
  head: () => pageHead("es", "projects"),
  component: () => <ProjectsPage locale="es" />,
});

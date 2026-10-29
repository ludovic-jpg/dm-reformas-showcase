import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/pages/ProjectsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/{c}/projects")({
  head: () => pageHead("pt", "projects"),
  component: () => <ProjectsPage locale="pt" />,
});

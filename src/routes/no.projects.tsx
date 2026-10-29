import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/pages/ProjectsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/no/projects")({
  head: () => pageHead("no", "projects"),
  component: () => <ProjectsPage locale="no" />,
});

import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/pages/ProjectsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ru/projects")({
  head: () => pageHead("ru", "projects"),
  component: () => <ProjectsPage locale="ru" />,
});

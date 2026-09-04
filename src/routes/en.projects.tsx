import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/pages/ProjectsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/projects")({
  head: () => pageHead("en", "projects"),
  component: () => <ProjectsPage locale="en" />,
});

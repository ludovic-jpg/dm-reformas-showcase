import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/pages/ProjectsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/projects")({
  head: () => pageHead("de", "projects"),
  component: () => <ProjectsPage locale="de" />,
});

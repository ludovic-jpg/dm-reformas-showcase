import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

/**
 * Thin wrapper so page components can link with a plain string path while
 * keeping TanStack Router's client-side navigation.
 */
export function LocaleLink({
  to,
  ...props
}: Omit<ComponentProps<typeof Link>, "to"> & { to: string }) {
  return <Link {...props} to={to as ComponentProps<typeof Link>["to"]} />;
}

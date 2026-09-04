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
  const AnyLink = Link as unknown as (props: Record<string, unknown>) => React.ReactElement;
  return <AnyLink {...props} to={to} />;
}


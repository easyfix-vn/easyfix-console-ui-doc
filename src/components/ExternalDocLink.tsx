import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type ExternalDocLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

export function ExternalDocLink({
  href,
  label,
  children,
}: ExternalDocLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`打开 ${label}（新标签页）`}
      className="group inline-flex items-center gap-1 align-baseline"
    >
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary transition-colors group-hover:bg-primary/10 group-hover:underline">
        {children}
      </code>
      <ExternalLink aria-hidden="true" className="size-3 text-muted-foreground" />
    </a>
  );
}

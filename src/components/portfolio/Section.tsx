import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}>
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

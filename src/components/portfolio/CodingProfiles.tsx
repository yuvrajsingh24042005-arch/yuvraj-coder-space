import { Code2, Github, Trophy, ExternalLink } from "lucide-react";
import { codingProfiles } from "@/content/portfolio";
import { Section } from "./Section";

const icons = {
  LeetCode: Code2,
  GitHub: Github,
  CodeChef: Trophy,
} as const;

export function CodingProfiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Coding Profiles"
      title="Where I practise"
      description="My active coding practice and project profiles."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {codingProfiles.map((p) => {
          const Icon = icons[p.platform as keyof typeof icons] ?? Code2;
          return (
            <article
              key={p.platform}
              className="glass-panel flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.platform}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              {p.stat && (
                <p className="mt-3 text-sm font-medium text-primary">{p.stat}</p>
              )}

              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                View Profile <ExternalLink className="size-4" />
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import { Award, Code2, Github, ExternalLink } from "lucide-react";
import { achievements } from "@/content/portfolio";
import { Section } from "./Section";

const icons = {
  leetcode: Code2,
  github: Github,
} as const;

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones & progress"
      description="Real progress from consistent practice and project building."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, idx) => {
          const Icon = icons[item.icon as keyof typeof icons] ?? Award;
          return (
            <article
              key={item.title}
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 animate-rise"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.kind}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-primary">{item.meta}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/10"
                >
                  View Profile <ExternalLink className="size-4" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

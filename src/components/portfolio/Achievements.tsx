import { Award } from "lucide-react";
import { achievements } from "@/content/portfolio";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Certifications & milestones"
      description="Placeholder entries — add only achievements you have genuinely earned."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="glass-panel flex gap-4 rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <Award className="size-5 text-primary" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {item.kind}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-primary">{item.meta}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

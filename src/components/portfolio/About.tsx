import { about } from "@/content/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={about.heading}>
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <div className="glass-panel h-fit rounded-3xl p-6">
          <dl className="divide-y divide-border">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{fact.label}</dt>
                <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

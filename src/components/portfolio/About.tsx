import { about } from "@/content/portfolio";
import { Section } from "./Section";
import { GraduationCap, Target, Code2, Rocket } from "lucide-react";

const icons = {
  Degree: GraduationCap,
  Focus: Target,
  LeetCode: Code2,
  Goal: Rocket,
};

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={about.heading}
      description={about.intro}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-5 animate-rise">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 animate-rise">
          {about.highlights.map((item, i) => {
            const Icon = icons[item.label as keyof typeof icons];
            return (
              <div
                key={item.label}
                className="glass-panel group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                </div>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

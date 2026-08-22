import { skills } from "@/content/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="The languages and tools I use while studying, practising problems and building projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="glass-panel group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold">{skill.name}</h3>
              <span className="font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                &lt;/&gt;
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

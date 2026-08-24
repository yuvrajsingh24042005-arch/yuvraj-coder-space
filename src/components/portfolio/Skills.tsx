import { skillCategories } from "@/content/portfolio";
import { Section } from "./Section";
import { icons, Terminal, Code, Globe, Wrench } from "lucide-react";

const categoryIcons: Record<string, typeof Terminal> = {
  "Programming Languages": Terminal,
  "Data Structures & Algorithms": Code,
  "Web Development": Globe,
  "Tools & Technologies": Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="The languages, concepts, and tools I use while learning and building."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, idx) => {
          const CategoryIcon = categoryIcons[category.title]!;
          return (
            <article
              key={category.title}
              className="glass-panel group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-rise"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <CategoryIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const SkillIcon = icons[skill.icon as keyof typeof icons];
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                    >
                      {SkillIcon && (
                        <SkillIcon className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                      )}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I'm building"
      description="Placeholder projects — replace the names, descriptions and links with your own work."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="glass-panel flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

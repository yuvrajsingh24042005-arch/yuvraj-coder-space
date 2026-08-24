import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I'm building"
      description="A selection of projects I'm working on, from mobile health apps to upcoming full-stack work."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="glass-panel group flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              {(project as { isPlaceholder?: boolean }).isPlaceholder && (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  Coming Soon
                </span>
              )}
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {project.description}
            </p>

            {project.tech.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:bg-secondary/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Github className="size-4" /> GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Live Demo <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

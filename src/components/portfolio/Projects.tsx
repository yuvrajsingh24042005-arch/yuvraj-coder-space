import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, Clock, Code2 } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Section } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  isPlaceholder?: boolean;
  featured?: boolean;
};

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border bg-secondary/30">
      <div className="grid-backdrop absolute inset-0 opacity-60 transition-transform duration-500 ease-out group-hover:scale-110" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-primary)_22%,transparent),transparent_65%)] transition-transform duration-500 ease-out group-hover:scale-110" />
      <div className="relative flex h-full items-center justify-center">
        {project.isPlaceholder ? (
          <Clock className="size-10 text-muted-foreground transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:scale-105">
            <span className="text-gradient">{project.name}</span>
          </span>
        )}
      </div>
      {project.featured && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          <Sparkles className="size-3.5" /> Featured Project
        </span>
      )}
      {project.isPlaceholder && (
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          Coming Soon
        </span>
      )}
    </div>
  );
}

function TechBadges({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-secondary/80 group-hover:text-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const list = projects as Project[];

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I'm building"
      description="A selection of projects I'm working on, from mobile health apps to upcoming full-stack work."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            onOpen={() => setActive(project)}
          />
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="glass-panel max-h-[85dvh] overflow-y-auto sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="flex flex-wrap items-center gap-2 text-2xl">
                  {active.name}
                  {active.featured && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      <Sparkles className="size-3.5" /> Featured
                    </span>
                  )}
                </DialogTitle>
                <DialogDescription className="text-left text-sm leading-relaxed">
                  {active.description}
                </DialogDescription>
              </DialogHeader>

              {active.tech.length > 0 && (
                <div className="group mt-2">
                  <p className="mb-3 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    <Code2 className="size-4" /> Tech Stack
                  </p>
                  <TechBadges tech={active.tech} />
                </div>
              )}

              {(active.githubUrl || active.demoUrl) && (
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {active.githubUrl && (
                    <a
                      href={active.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <Github className="size-4" /> View on GitHub
                    </a>
                  )}
                  {active.demoUrl && (
                    <a
                      href={active.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      Live Demo <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const { ref, shown } = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl bg-[linear-gradient(120deg,color-mix(in_oklab,var(--color-primary)_55%,transparent),transparent_45%,color-mix(in_oklab,var(--color-primary)_35%,transparent))] opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-70"
      />
      <article
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.name}`}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen();
          }
        }}
        className={`glass-panel relative flex h-full cursor-pointer flex-col gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
          project.featured ? "border-primary/25" : ""
        }`}
      >
        <ProjectVisual project={project} />

        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          {project.tech.length > 0 && (
            <div className="mt-5">
              <TechBadges tech={project.tech} />
            </div>
          )}

          {(project.githubUrl || project.demoUrl) && (
            <div className="mt-6 flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Github className="size-4" /> GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Live Demo <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

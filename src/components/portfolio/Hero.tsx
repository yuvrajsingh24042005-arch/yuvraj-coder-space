import { ArrowRight, Github, Terminal } from "lucide-react";
import { profile } from "@/content/portfolio";

const codeLines = [
  { t: "class ", k: "Developer {" },
  { t: "  String[] stack = ", k: '{ "Java", "C", "JS", "SQL" };' },
  { t: "  String focus = ", k: '"DSA + Web Dev";' },
  { t: "  boolean learning = ", k: "true;" },
  { t: "}", k: "" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Open to internships
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            Hi, I'm <span className="text-gradient">Yuvraj Singh</span>
          </h1>
          <p className="mt-5 font-mono text-sm text-primary sm:text-base">{profile.tagline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-accent)" }}
            >
              View My Projects
              <ArrowRight className="size-4" />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="size-4" />
              View GitHub
            </a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-2 border-b border-border pb-4">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-5/70" />
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="ml-3 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Terminal className="size-3.5" /> Developer.java
              </span>
            </div>
            <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-7">
              <code>
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="select-none text-muted-foreground/50">{i + 1}</span>
                    <span className="text-muted-foreground">
                      {line.t}
                      <span className="text-primary">{line.k}</span>
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Java", "DSA", "Web Dev"].map((tag) => (
              <div
                key={tag}
                className="glass-panel rounded-2xl px-3 py-4 text-center font-mono text-xs text-muted-foreground"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

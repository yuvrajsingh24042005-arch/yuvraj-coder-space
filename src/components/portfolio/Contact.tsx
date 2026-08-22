import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/content/portfolio";
import { Section } from "./Section";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", value: profile.githubUrl.replace(/^https?:\/\//, ""), href: profile.githubUrl, Icon: Github },
  {
    label: "LinkedIn",
    value: profile.linkedinUrl.replace(/^https?:\/\//, ""),
    href: profile.linkedinUrl,
    Icon: Linkedin,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out!", {
      description: "This form isn't connected to a backend yet — message not sent.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      description="Open to internships, collaborations and conversations about code."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <span className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <Icon className="size-5 text-primary" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate text-sm font-medium">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} className="glass-panel space-y-4 rounded-3xl p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={field}
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What would you like to talk about?"
              className={field + " resize-none"}
            />
          </label>
          <button
            type="submit"
            className="glow-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-accent)" }}
          >
            Send message <Send className="size-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <span className="font-display text-sm font-bold tracking-[0.2em]">{profile.logo}</span>
        <p className="text-sm text-muted-foreground">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

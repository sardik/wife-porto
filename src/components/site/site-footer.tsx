import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

import { SITE } from "@/content/site";
import { Container } from "@/components/site/container";
import { Separator } from "@/components/ui/separator";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: Instagram,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  TikTok: TikTokIcon,
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 pb-14">
      <Container>
        <Separator className="mb-8" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">{SITE.name}</p>
            <p className="text-xs text-muted-foreground transition-opacity hover:opacity-100 opacity-60">
              © {year} {SITE.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SITE.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.label] || Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-foreground/20 hover:text-accent"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/site/container";
import { FadeInUp } from "@/components/site/fade-in-up";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Diah.",
  openGraph: {
    title: "Contact",
    description: "How to reach Diah.",
    type: "website",
  },
};

export default function KontakPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Container>
        <FadeInUp delayMs={0}>
          <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            GET IN TOUCH
          </p>
          <h1 className="mt-4 text-4xl font-[var(--font-display)] leading-[1.05] tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            I’m always open to questions, collaboration ideas, or a simple hello.
          </p>
          </div>
        </FadeInUp>

        <FadeInUp delayMs={120}>
          <Separator className="mt-10" />
        </FadeInUp>

        <FadeInUp delayMs={200}>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              EMAIL
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block text-lg underline underline-offset-4 hover:text-accent"
            >
              {SITE.email}
            </a>

            <p className="mt-6 text-sm text-muted-foreground">
              I usually reply within 1–3 business days.
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              SOCIAL
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm underline underline-offset-4 hover:text-accent"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {s.label}
                </a>
              ))}
            </div>

            <Separator className="my-8" />
            <Link
              href="/"
              className="text-sm underline underline-offset-4 hover:text-accent"
            >
              Back to home
            </Link>
          </div>
          </div>
        </FadeInUp>
      </Container>
    </div>
  );
}

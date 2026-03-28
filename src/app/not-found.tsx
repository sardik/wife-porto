import Link from "next/link";

import { Container } from "@/components/site/container";
import { FadeInUp } from "@/components/site/fade-in-up";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-14 sm:pt-16">
      <Container>
        <FadeInUp delayMs={0}>
        <p className="text-xs font-medium tracking-wide text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-4xl font-[var(--font-display)] leading-[1.05] tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        </FadeInUp>
        <FadeInUp delayMs={120}>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
        </FadeInUp>
      </Container>
    </div>
  );
}

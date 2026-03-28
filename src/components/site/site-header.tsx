"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";

import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/p/about" },
  { label: "Dispatch", href: "/p/dispatch" },
  { label: "Learning Resources", href: "/p/learning-resources" },
  { label: "Creative Content", href: "/p/creative-content" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight hover:text-accent"
            onClick={() => setMobileOpen(false)}
          >
            {SITE.name}
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground underline underline-offset-8"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          </nav>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Menu
          </Button>
        </div>

        {mobileOpen ? (
          <div className="md:hidden pb-5">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors hover:text-foreground",
                      active && "text-foreground underline underline-offset-8"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

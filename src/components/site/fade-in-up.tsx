"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type FadeInUpProps = {
  children: React.ReactNode;
  delayMs?: number;
  durationMs?: number;
  className?: string;
};

export function FadeInUp({ children, delayMs, durationMs, className }: FadeInUpProps) {
  return (
    <div
      data-reveal
      className={cn(className)}
      style={{
        ["--reveal-delay" as never]: delayMs != null ? `${delayMs}ms` : undefined,
        ["--reveal-duration" as never]: durationMs != null ? `${durationMs}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}

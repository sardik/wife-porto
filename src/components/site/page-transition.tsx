"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-shell">
      {children}
    </div>
  );
}

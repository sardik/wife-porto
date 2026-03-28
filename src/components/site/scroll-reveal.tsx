"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

const SELECTOR = "[data-reveal]";

function inViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom > 0 && rect.top < vh * 0.92;
}

export function ScrollReveal() {
  const pathname = usePathname();

  React.useEffect(() => {
    const docEl = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    for (const el of elements) el.classList.remove("is-revealed");

    const revealIfAllowed = (el: HTMLElement) => {
      if (docEl.dataset.loading === "true") return false;
      el.classList.add("is-revealed");
      return true;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (docEl.dataset.loading === "true") return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          revealIfAllowed(el);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    const revealNow = () => {
      if (docEl.dataset.loading === "true") return;
      for (const el of elements) {
        if (el.classList.contains("is-revealed")) continue;
        if (!inViewport(el)) continue;
        revealIfAllowed(el);
        observer.unobserve(el);
      }
    };

    for (const el of elements) observer.observe(el);

    const mutationObserver = new MutationObserver(() => revealNow());
    mutationObserver.observe(docEl, { attributes: true, attributeFilter: ["data-loading"] });

    const onScroll = () => revealNow();
    window.addEventListener("scroll", onScroll, { passive: true });

    revealNow();
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}


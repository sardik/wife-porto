"use client";

import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import * as React from "react";

import animationData from "@/assets/lottie/loader_cat.json";

const MIN_VISIBLE_MS = 3000;
const FADE_OUT_MS = 240;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
}

function getAnchorTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest("a");
}

export function RouteLoader() {
  const pathname = usePathname();

  const [visible, setVisible] = React.useState(true);
  const [hiding, setHiding] = React.useState(false);
  const shownAtRef = React.useRef<number>(0);
  const timeoutRef = React.useRef<number | null>(null);
  const hideTimeoutRef = React.useRef<number | null>(null);

  const show = React.useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
    document.documentElement.dataset.loading = "true";
    shownAtRef.current = Date.now();
    setHiding(false);
    setVisible(true);
  }, []);

  const hideAfterMin = React.useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    const elapsed = Date.now() - shownAtRef.current;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    timeoutRef.current = window.setTimeout(() => {
      setHiding(true);
      if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        setHiding(false);
        document.documentElement.dataset.loading = "false";
      }, FADE_OUT_MS);
    }, remaining);
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.loading = "true";
    shownAtRef.current = Date.now();
    hideAfterMin();
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
    };
  }, [hideAfterMin]);

  React.useEffect(() => {
    if (!visible) return;
    hideAfterMin();
  }, [pathname, visible, hideAfterMin]);

  React.useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (isModifiedClick(event)) return;

      const anchor = getAnchorTarget(event.target);
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;
      if (
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(rawHref, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const isSamePath =
        url.pathname === window.location.pathname && url.search === window.location.search;
      if (isSamePath) return;

      show();
    };

    const onPopState = () => show();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[100] grid place-items-center bg-background/95 backdrop-blur-sm",
        hiding ? "animate-fade-out" : "",
      ].join(" ")}
    >
      <div className="w-[220px] sm:w-[260px]">
        <Lottie animationData={animationData} loop />
      </div>
    </div>
  );
}

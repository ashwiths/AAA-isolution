"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { setLenis, getLenis, scrollToHash } from "@/lib/lenis";

/* Single rAF loop: Lenis drives ScrollTrigger — 00 §7.3.
   Also owns in-page anchor scrolling for the whole site, so every link
   (nav, hero CTAs, footer, and anything we add later) lands below the header. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!prefersReducedMotion()) {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
    }

    /* delegated: catches every same-page anchor on the site */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      const link = (e.target as Element)?.closest?.<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      scrollToHash(href);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  /* Route change effect: whenever pathname changes, always scroll to the top of the new page */
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash && hash !== "#home" && hash !== "#") {
      requestAnimationFrame(() => setTimeout(() => scrollToHash(hash), 80));
    } else {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0 });
      }
    }
  }, [pathname]);

  return <>{children}</>;
}

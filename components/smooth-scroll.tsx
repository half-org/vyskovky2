"use client";

import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useEffect } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <AnchorLinks />
      {children}
    </ReactLenis>
  );
}

function AnchorLinks() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.slice(1);
      if (!id) {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.8, lock: true });
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, {
        offset: -72,
        duration: 1.8,
        lock: true,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
  return null;
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Práce", href: "#sluzby", index: "01" },
  { label: "Reference", href: "#reference", index: "02" },
  { label: "Postup", href: "#postup", index: "03" },
  { label: "Poptávka", href: "#poptavka", index: "04" },
  { label: "Kontakt", href: "#kontakt", index: "05" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-line/70"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#top" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden border border-fg/30">
            <div className="absolute inset-0 grid place-items-center font-display text-[18px] leading-none text-fg">
              V
            </div>
            <div className="absolute inset-x-0 top-0 h-px origin-top scale-y-100 bg-rust-bright transition-transform duration-700 group-hover:scale-y-[18]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[20px] tracking-[0.04em]">
              {BRAND.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-mute">
              {BRAND.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim transition-colors hover:text-fg"
            >
              <span className="text-rust-bright/70 group-hover:text-rust-bright">
                {item.index}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BRAND.phoneHref}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim hover:text-fg"
          >
            {BRAND.phone}
          </a>
          <a
            href="#poptavka"
            className="group relative inline-flex items-center gap-2 border border-fg bg-fg px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-bg transition-colors hover:bg-rust-bright hover:border-rust-bright hover:text-fg"
          >
            <span>Poptat zásah</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 9L9 1M9 1H3M9 1V7"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={BRAND.phoneHref}
            className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim hover:text-fg sm:inline"
          >
            {BRAND.phone}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-fg/30"
          >
            <span
              className={cn(
                "block h-px w-4 bg-fg transition-transform",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-fg transition-transform",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-line/70 bg-bg lg:hidden"
          >
            <nav className="flex flex-col py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between px-6 py-3 font-display text-2xl"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] text-rust-bright">
                    {item.index}
                  </span>
                </a>
              ))}
              <a
                href={BRAND.phoneHref}
                className="mx-6 mt-2 border-t border-line py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim"
              >
                {BRAND.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

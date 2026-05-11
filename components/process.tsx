"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PROCESS } from "@/lib/data";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const ropeHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="postup" className="relative bg-bg-soft border-y border-line">
      <div className="mx-auto max-w-[1440px] px-6 pt-32 pb-24 md:pt-48 md:pb-32 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
              §04 / Jak to běhá
            </span>
            <h2 className="mt-4 font-display uppercase text-[clamp(40px,5.4vw,84px)] leading-[0.95]">
              Pět zastavení{" "}
              <span className="font-serif italic font-light text-fg-dim">mezi</span>
              <br />
              poptávkou a fakturou.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[12px] uppercase tracking-[0.22em] text-fg-dim md:text-right">
            Bez schovaných cen,
            <br />
            bez půldenních prodlev,
            <br />
            bez výmluv.
          </p>
        </div>

        <div ref={ref} className="relative mt-20 md:mt-28">
          {/* Background descent rope */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-3 top-0 hidden h-full w-px bg-line md:block"
            style={{ left: "calc(16.67% - 0.5px)" }}
          />
          {/* Animated rope that draws on scroll */}
          <motion.div
            aria-hidden
            style={{ height: ropeHeight, left: "calc(16.67% - 0.5px)" }}
            className="pointer-events-none absolute top-0 hidden w-px origin-top bg-rust-bright md:block"
          />

          <ol className="relative">
            {PROCESS.map((step, i) => (
              <ProcessRow
                key={step.no}
                step={step}
                index={i}
                isLast={i === PROCESS.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
  isLast,
}: {
  step: (typeof PROCESS)[number];
  index: number;
  isLast: boolean;
}) {
  const total = PROCESS.length;
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.7, 0, 0.2, 1] }}
      className={
        isLast
          ? "group relative grid grid-cols-12 gap-4 border-y border-line pt-14 pb-10 md:pt-20 md:pb-12"
          : "group relative grid grid-cols-12 gap-4 border-t border-line py-14 md:py-20"
      }
    >
      <div className="col-span-12 flex flex-col gap-3 md:col-span-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-fg-dim">
          Krok
        </span>
        <span
          aria-hidden
          className="service-no font-display leading-[0.82] text-[clamp(96px,12vw,180px)]"
        >
          {step.no}
        </span>
      </div>

      {/* Connector dot on the rope (md+) */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-14 hidden h-3 w-3 -translate-x-1/2 rotate-45 bg-bg-soft ring-1 ring-rust-bright md:block md:top-24"
        style={{ left: "calc(16.67%)" }}
      />

      <div className="col-span-12 md:col-span-4 md:pl-6 lg:pl-10">
        <h3 className="font-display text-[clamp(32px,3.8vw,60px)] uppercase leading-[0.95] text-fg transition-colors group-hover:text-rust-bright">
          {step.title}
        </h3>
        <div className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
          <span className="tabular text-rust-bright">
            0{index + 1} / 0{total}
          </span>
          <span className="h-px w-8 bg-line" />
          <span>{isLast ? "Konec" : "Pokračuje"}</span>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6">
        <p className="max-w-[52ch] font-serif text-[17px] leading-[1.65] text-fg-dim">
          {step.body}
        </p>
      </div>

      {/* Hover descent line on left edge */}
      <span className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-rust-bright transition-transform duration-700 group-hover:scale-y-100" />
    </motion.li>
  );
}

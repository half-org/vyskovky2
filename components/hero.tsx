"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BRAND, STATS } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* Background grid + radial */}
      <div className="absolute inset-0 grid-hairline opacity-40" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 0%, rgba(194,65,12,0.12), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(245,209,66,0.06), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-6 pb-12 pt-32 lg:px-16 lg:pt-40">
        {/* Main title */}
        <motion.div
          style={{ y: titleY, opacity: opacityFade }}
          className="flex-1 flex items-center"
        >
          <div className="w-full">
            <h1 className="font-display text-fg uppercase">
              <Word delay={0.05} className="block text-[clamp(64px,14vw,220px)]">
                Výškové
              </Word>
              <span className="block text-[clamp(64px,14vw,220px)]">
                <Word delay={0.2} className="inline-block">
                  pr
                </Word>
                <Word
                  delay={0.3}
                  className="inline-block text-rust-bright"
                >
                  á
                </Word>
                <Word delay={0.4} className="inline-block">
                  ce.
                </Word>
              </span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.7, 0, 0.2, 1] }}
                className="mt-2 block font-serif italic font-light text-fg-dim text-[clamp(32px,6vw,84px)] leading-[0.95]"
              >
                tam, kde končí lešení.
              </motion.span>
            </h1>

            <div className="mt-16 grid grid-cols-12 gap-8 md:mt-20">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="col-span-12 max-w-[44ch] font-serif text-[17px] leading-[1.55] text-fg-dim md:col-span-5 md:col-start-1"
              >
                Šestnáct let zavěšeni na lanech nad střechami, fasádami i stromy.
                Děláme nátěry, mytí, montáže, demontáže reklam, rizikové kácení
                a rekonstrukce — všude tam, kam se nedostane jeřáb ani lešení.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.05 }}
                className="col-span-12 flex flex-col gap-4 md:col-span-4 md:col-start-9"
              >
                <a
                  href="#poptavka"
                  className="group relative inline-flex items-center justify-between gap-4 border border-fg bg-fg px-5 py-4 text-bg transition-colors hover:bg-rust-bright hover:border-rust-bright hover:text-fg"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
                    Poslat poptávku
                  </span>
                  <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
                </a>
                <a
                  href={BRAND.phoneHref}
                  className="group flex items-center justify-between gap-4 border border-line px-5 py-4 text-fg transition-colors hover:border-fg"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-fg-dim group-hover:text-fg">
                    Akutní zásah
                  </span>
                  <span className="font-display text-lg">{BRAND.phone}</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          style={{ y: photoY }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden border-y border-line bg-line/60 md:mt-24 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative bg-bg px-5 py-6 lg:px-8 lg:py-7"
            >
              <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                ◢
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[44px] leading-none text-fg md:text-[56px]">
                  {s.value}
                </span>
                <span className="font-mono text-sm text-rust-bright">
                  {s.suffix}
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-mute">
          sestup
        </span>
        <span className="block h-12 w-px overflow-hidden bg-line">
          <span className="block h-1/2 w-full origin-top animate-[drop-line_1.6s_ease-in-out_infinite] bg-rust-bright" />
        </span>
      </motion.div>
    </section>
  );
}

function Word({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block overflow-hidden align-bottom ${className ?? ""}`}
      style={{
        paddingTop: "0.25em",
        marginTop: "-0.25em",
        paddingBottom: "0.04em",
        marginBottom: "-0.04em",
      }}
    >
      <motion.span
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.95,
          ease: [0.7, 0, 0.2, 1],
          delay,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none">
      <path
        d="M7 1V13M7 13L1 7M7 13L13 7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

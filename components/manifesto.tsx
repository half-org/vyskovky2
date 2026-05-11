"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="manifest"
      className="relative border-y border-line/60 bg-bg-soft"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-32 md:py-48 lg:px-16">
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-32 flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
              §02 / Manifest
            </span>
            <div className="h-px w-12 bg-fg" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
              Co s sebou nesem
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <h2 className="font-display uppercase text-fg text-balance text-[clamp(40px,5.4vw,84px)] leading-[0.95]">
            Pracujeme tam,{" "}
            <span className="font-serif italic font-light text-fg-dim text-[0.86em]">
              kam jiní
            </span>
            <br />
            nedosáhnou.{" "}
            <span className="text-rust-bright">A vrátíme se</span>{" "}
            <span className="font-serif italic font-light text-fg-dim text-[0.86em]">
              dolů.
            </span>
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-14 md:mt-28 md:grid-cols-3 md:gap-12">
            <Pillar
              no="A"
              title="Lano první"
              body="Horolezecká technika není trik. Je to ekonomika — žádné lešení, žádný zábor, žádné prostoje provozu pod námi. Klient platí lidi a materiál, ne dny strávené stavbou."
            />
            <Pillar
              no="B"
              title="Plošina, když dává smysl"
              body="Kloubová, teleskopická, nůžková. Tam, kde je rychlejší přijet s plošinou, ji přivezeme. Bez puristických dogmat."
            />
            <Pillar
              no="C"
              title="Papíry a hlavy"
              body="Šestnáct let bez pracovního úrazu. BOZP, koordinátor, ohlášky, pojištění do 50 mil. Kč. Práce se nedělají na divoko."
            />
          </div>

          {/* Animated underline */}
          <div className="relative mt-24 h-px w-full bg-line">
            <motion.div
              style={{ width: lineProgress }}
              className="absolute inset-y-0 left-0 bg-rust-bright"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            <span>0 m</span>
            <span>Maximální výška pracoviště — 98 m</span>
            <span>98 m</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  no,
  title,
  body,
}: {
  no: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative border-t border-line pt-6">
      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-rust-bright">
        {no}
      </span>
      <h3 className="mt-5 font-display text-[28px] uppercase leading-none">
        {title}
      </h3>
      <p className="mt-6 font-serif text-[15px] leading-[1.65] text-fg-dim">
        {body}
      </p>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="sluzby" className="relative">
      <div className="mx-auto max-w-[1440px] px-6 pt-32 pb-16 md:pt-48 md:pb-20 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
              §03 / Co děláme
            </span>
            <h2 className="mt-4 font-display uppercase text-[clamp(40px,6vw,108px)] leading-[0.92]">
              Šest{" "}
              <span className="font-serif italic font-light text-fg-dim">
                disciplín,
              </span>
              <br />
              jedna parta lidí.
            </h2>
          </div>
          <p className="max-w-md font-serif text-[15px] leading-[1.55] text-fg-dim md:text-right">
            Nejsme generální dodavatel. Děláme jednu věc pořádně — práce,
            ke kterým je třeba laní, plošin a klidných nervů ve výšce.
          </p>
        </div>
      </div>

      <ul className="mx-auto max-w-[1440px] px-6 lg:px-16">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.no} service={s} index={i} />
        ))}
      </ul>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.7, 0, 0.2, 1] }}
      className="group relative grid grid-cols-12 gap-4 border-t border-line py-12 md:py-20"
    >
      <div className="col-span-12 flex flex-col gap-2 md:col-span-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-fg-dim">
          Práce N°
        </span>
        <span
          aria-hidden
          className="service-no font-display leading-[0.82] text-[clamp(96px,12vw,180px)]"
        >
          {service.no}
        </span>
      </div>

      <div className="col-span-12 md:col-span-4">
        <h3 className="font-display text-[clamp(32px,4.5vw,68px)] uppercase leading-[0.95] text-fg transition-colors group-hover:text-rust-bright">
          {service.name}
        </h3>
        <p className="mt-6 max-w-[44ch] font-serif text-[16px] leading-[1.65] text-fg-dim">
          {service.blurb}
        </p>
        <div className="mt-8 inline-flex items-center gap-3 border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          <span className="text-rust-bright">⊕</span>
          {service.technique}
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 md:pl-10">
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-bg p-5 font-serif text-[15.5px] leading-[1.6] text-fg-dim transition-colors hover:bg-bg-soft hover:text-fg"
            >
              <span className="mt-1 inline-block h-[6px] w-[6px] flex-none rotate-45 bg-rust-bright" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* hover descent line */}
      <span className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-rust-bright transition-transform duration-700 group-hover:scale-y-100" />
    </motion.li>
  );
}

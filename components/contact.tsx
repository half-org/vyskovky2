"use client";

import { motion } from "motion/react";
import { BRAND } from "@/lib/data";
import { cn } from "@/lib/utils";

const COORDS = [
  { label: "Telefon", value: BRAND.phone, href: BRAND.phoneHref },
  { label: "E-mail", value: BRAND.email, href: BRAND.emailHref },
  { label: "Sídlo", value: BRAND.address, href: null },
  { label: "Působnost", value: BRAND.region, href: null },
  { label: "IČO", value: BRAND.ic, href: null },
  { label: "DIČ", value: BRAND.dic, href: null },
];

export function Contact() {
  return (
    <section id="kontakt" className="relative bg-bg-soft border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:py-48 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
              §07 / Kontakt
            </span>
            <h2 className="mt-4 font-display uppercase text-[clamp(40px,5.4vw,84px)] leading-[0.95]">
              Volej.{" "}
              <span className="font-serif italic font-light text-fg-dim">
                Piš.
              </span>{" "}
              <br />
              Bereme to{" "}
              <span className="text-rust-bright">vážně.</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[12px] uppercase tracking-[0.22em] text-fg-dim md:text-right">
            Po — Pá · 07:00 — 18:00
            <br />
            Havárie · 24/7
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:mt-28 md:grid-cols-3">
          {COORDS.map((c, i) => {
            const isEmail = c.label === "E-mail";
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="bg-bg-soft p-8 md:p-10"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    className={cn(
                      "mt-3 block break-words font-display uppercase leading-none transition-colors hover:text-rust-bright",
                      isEmail
                        ? "text-[18px] tracking-[0.005em] md:text-[22px]"
                        : "text-[24px] md:text-[28px]",
                    )}
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-3 break-words font-display text-[22px] uppercase leading-none md:text-[26px]">
                    {c.value}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Big coordinates strip */}
        <div className="mt-20 grid grid-cols-12 gap-4 border-t border-line pt-12 md:mt-28 md:pt-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-serif text-[clamp(20px,2.4vw,34px)] leading-[1.25] text-fg-dim">
              <span className="font-serif italic font-light">
                „Když nás potřebujete, jsme nahoře. Když potřebujete,
                abychom byli dole — taky. “
              </span>
              <br />
              <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.28em] text-rust-bright">
                — Tým Vertikála
              </span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-12">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line">
              <div className="bg-bg p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  Šířka
                </span>
                <p className="mt-2 font-display text-[22px] leading-none">
                  49.1951° N
                </p>
              </div>
              <div className="bg-bg p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  Délka
                </span>
                <p className="mt-2 font-display text-[22px] leading-none">
                  16.6068° E
                </p>
              </div>
              <div className="bg-bg p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  Region
                </span>
                <p className="mt-2 font-display text-[22px] leading-none">
                  JM · CZ
                </p>
              </div>
              <div className="bg-bg p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  Datovka
                </span>
                <p className="mt-2 font-display text-[22px] leading-none">
                  v3rt1k
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

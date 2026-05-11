"use client";

import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { REFERENCES, type Reference } from "@/lib/data";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Vše",
  ...Array.from(new Set(REFERENCES.map((r) => r.category))),
];

export function References() {
  const [active, setActive] = useState("Vše");
  const filtered =
    active === "Vše"
      ? REFERENCES
      : REFERENCES.filter((r) => r.category === active);

  return (
    <section id="reference" className="relative">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:py-48 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
              §05 / Co máme za sebou
            </span>
            <h2 className="mt-4 font-display uppercase text-[clamp(40px,5.4vw,84px)] leading-[0.95]">
              Deset deníkových
              <br />
              <span className="font-serif italic font-light text-fg-dim">
                záznamů
              </span>{" "}
              z lana.
            </h2>
          </div>
          <p className="max-w-sm font-serif text-[15px] leading-[1.55] text-fg-dim md:text-right">
            Výběr z více než 1 240 zakázek za posledních 16 let.
            Fotodokumentaci dalších rádi pošleme na vyžádání.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-16 flex flex-wrap items-center gap-2 border-y border-line py-5 md:mt-24">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            Filtr:
          </span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                active === c
                  ? "border-fg bg-fg text-bg"
                  : "border-line text-fg-dim hover:border-fg hover:text-fg",
              )}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            {filtered.length} / {REFERENCES.length} záznamů
          </span>
        </div>

        {/* Grid */}
        <ul className="mt-px grid grid-cols-1 gap-px overflow-hidden border-x border-b border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <ReferenceCard key={r.no} item={r} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReferenceCard({ item, index }: { item: Reference; index: number }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.04 }}
      className="group relative flex min-h-[420px] flex-col bg-bg p-8 transition-colors hover:bg-bg-soft md:p-9"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust-bright">
          № {item.no}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          {item.year}
        </span>
      </div>

      <div
        className="relative my-7 h-48 w-full overflow-hidden border border-line bg-bg-soft"
        aria-hidden
      >
        <CategoryArt category={item.category} index={index} />
      </div>

      <h3 className="font-display text-[22px] uppercase leading-[1] text-balance">
        {item.title}
      </h3>
      <p className="mt-4 font-serif text-[15px] leading-[1.65] text-fg-dim">
        {item.description}
      </p>

      <div className="mt-auto flex items-end justify-between border-t border-line/70 pt-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            Místo
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
            {item.place}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            Rozsah
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
            {item.metric}
          </span>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-rust-bright transition-transform duration-700 group-hover:scale-x-100" />
    </motion.li>
  );
}

function CategoryArt({
  category,
  index,
}: {
  category: string;
  index: number;
}) {
  const variants: Record<string, ReactNode> = {
    "Nátěry střech": <RoofArt />,
    Reklamy: <BillboardArt />,
    Arboristika: <TreeArt />,
    "Čištění": <WindowsArt />,
    Konstrukce: <SteelArt />,
    "Stavební": <BalconyArt />,
    "Údržba": <TowerArt />,
    "Nátěry konstrukcí": <ChimneyArt />,
    "Havarijní": <StormArt />,
  };
  return (
    <div className="absolute inset-0 grid place-items-center">
      {variants[category] ?? <DefaultArt index={index} />}
    </div>
  );
}

/* --- Generative SVG artworks per category --- */

const stroke = "#c2410c";
const fg = "rgba(241,236,224,0.55)";

function RoofArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <defs>
        <pattern id="rfHatch" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6L6 0" stroke={fg} strokeWidth="0.5" />
        </pattern>
      </defs>
      <path d="M10 90 L100 30 L190 90 Z" fill="url(#rfHatch)" stroke={fg} />
      <path d="M10 90 L100 30 L190 90" stroke={fg} fill="none" />
      <path d="M100 30 L100 90" stroke={fg} strokeDasharray="2 3" />
      <circle cx="60" cy="60" r="3" fill={stroke} />
      <line x1="60" y1="20" x2="60" y2="60" stroke={stroke} strokeWidth="0.6" />
      <text
        x="14"
        y="104"
        fill={fg}
        fontFamily="monospace"
        fontSize="6"
        letterSpacing="1.2"
      >
        FIG.01 — ROOF / FALC
      </text>
    </svg>
  );
}

function BillboardArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <rect x="40" y="20" width="120" height="50" fill="none" stroke={fg} />
      <rect x="44" y="24" width="112" height="42" fill={stroke} opacity="0.18" />
      <text
        x="50"
        y="50"
        fill={stroke}
        fontFamily="monospace"
        fontSize="14"
        letterSpacing="3"
      >
        SIGN
      </text>
      <line x1="98" y1="70" x2="98" y2="100" stroke={fg} />
      <line x1="102" y1="70" x2="102" y2="100" stroke={fg} />
      <line x1="80" y1="100" x2="120" y2="100" stroke={fg} strokeWidth="1.4" />
      <line x1="100" y1="0" x2="100" y2="20" stroke={stroke} strokeWidth="0.6" />
      <circle cx="100" cy="20" r="2" fill={stroke} />
    </svg>
  );
}

function TreeArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <line x1="100" y1="0" x2="100" y2="120" stroke={fg} strokeDasharray="1 4" />
      <line x1="100" y1="30" x2="100" y2="100" stroke={fg} strokeWidth="1.2" />
      <path
        d="M100 40 Q70 30 60 50 M100 55 Q130 50 140 30 M100 70 Q70 75 75 95 M100 80 Q135 80 140 100"
        stroke={fg}
        fill="none"
      />
      <circle cx="100" cy="55" r="2.4" fill={stroke} />
      <circle cx="100" cy="80" r="2.4" fill={stroke} />
      <line x1="100" y1="55" x2="140" y2="30" stroke={stroke} strokeWidth="0.6" />
      <line x1="100" y1="80" x2="60" y2="95" stroke={stroke} strokeWidth="0.6" />
    </svg>
  );
}

function WindowsArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <g stroke={fg} fill="none">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={20 + c * 28}
              y={10 + r * 20}
              width="24"
              height="16"
            />
          )),
        )}
      </g>
      <rect x="48" y="30" width="24" height="16" fill={stroke} opacity="0.5" />
      <rect x="76" y="30" width="24" height="16" fill={stroke} opacity="0.2" />
      <line x1="120" y1="0" x2="120" y2="115" stroke={stroke} strokeDasharray="2 3" />
      <circle cx="120" cy="50" r="2.5" fill={stroke} />
    </svg>
  );
}

function SteelArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <path d="M10 100 L100 20 L190 100 Z" stroke={fg} fill="none" />
      <path d="M10 100 L190 100" stroke={fg} />
      <path d="M40 80 L160 80 M70 60 L130 60 M100 20 L100 100" stroke={fg} />
      <path
        d="M40 80 L70 60 M70 60 L100 20 M100 20 L130 60 M130 60 L160 80 M40 80 L100 20 M160 80 L100 20"
        stroke={fg}
        strokeDasharray="2 3"
      />
      <circle cx="100" cy="60" r="3" fill={stroke} />
      <line x1="100" y1="0" x2="100" y2="60" stroke={stroke} strokeWidth="0.6" />
    </svg>
  );
}

function BalconyArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={i} stroke={fg} fill="none">
          <rect x="30" y={10 + i * 28} width="140" height="22" />
          <line
            x1="30"
            y1={32 + i * 28}
            x2="170"
            y2={32 + i * 28}
            stroke={fg}
            strokeWidth="0.6"
          />
          {Array.from({ length: 14 }).map((_, j) => (
            <line
              key={j}
              x1={32 + j * 10}
              y1={14 + i * 28}
              x2={32 + j * 10}
              y2={30 + i * 28}
              stroke={fg}
              strokeWidth="0.4"
            />
          ))}
        </g>
      ))}
      <rect x="60" y="38" width="22" height="22" fill={stroke} opacity="0.3" />
    </svg>
  );
}

function TowerArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <path d="M80 110 L100 10 L120 110 Z" stroke={fg} fill="none" />
      <line x1="85" y1="80" x2="115" y2="80" stroke={fg} />
      <line x1="90" y1="55" x2="110" y2="55" stroke={fg} />
      <line x1="95" y1="30" x2="105" y2="30" stroke={fg} />
      <circle cx="100" cy="10" r="3" fill={stroke} />
      <line x1="100" y1="10" x2="100" y2="0" stroke={stroke} />
      <line x1="0" y1="110" x2="200" y2="110" stroke={fg} strokeDasharray="2 3" />
    </svg>
  );
}

function ChimneyArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <rect x="86" y="10" width="28" height="100" stroke={fg} fill="none" />
      <line x1="86" y1="30" x2="114" y2="30" stroke={fg} />
      <line x1="86" y1="60" x2="114" y2="60" stroke={fg} />
      <line x1="86" y1="90" x2="114" y2="90" stroke={fg} />
      <rect x="86" y="30" width="28" height="6" fill={stroke} opacity="0.7" />
      <line x1="100" y1="0" x2="100" y2="10" stroke={stroke} />
      <line x1="60" y1="110" x2="140" y2="110" stroke={fg} />
    </svg>
  );
}

function StormArt() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <path
        d="M0 30 Q40 10 80 30 T160 30 T200 30"
        stroke={fg}
        fill="none"
      />
      <path
        d="M0 50 Q40 30 80 50 T160 50 T200 50"
        stroke={fg}
        fill="none"
        opacity="0.6"
      />
      <path
        d="M40 60 L50 80 L46 80 L60 100 L48 86 L52 86 L42 70 Z"
        fill={stroke}
      />
      <path
        d="M120 70 L130 92 L126 92 L142 112 L128 96 L132 96 L122 80 Z"
        fill={stroke}
        opacity="0.8"
      />
    </svg>
  );
}

function DefaultArt({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <rect x="10" y="10" width="180" height="100" stroke={fg} fill="none" />
      <line
        x1="10"
        y1={20 + (index * 12) % 80}
        x2="190"
        y2={20 + (index * 12) % 80}
        stroke={stroke}
      />
    </svg>
  );
}

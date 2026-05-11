import { TICKER } from "@/lib/data";

export function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-line bg-bg py-5"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="flex items-center gap-8 px-6 font-display text-[36px] uppercase tracking-[0.04em] text-fg md:text-[52px]"
          >
            {text}
            <span className="inline-block h-2 w-2 rotate-45 bg-rust-bright" />
          </span>
        ))}
      </div>
    </div>
  );
}

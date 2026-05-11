import { BRAND } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-bg border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="font-display text-[clamp(60px,11vw,180px)] uppercase leading-[0.85]">
              {BRAND.name}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-dim">
              {BRAND.tagline} · {BRAND.established}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim sm:grid-cols-3 sm:gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-mute">Volej</span>
              <a
                href={BRAND.phoneHref}
                className="text-fg hover:text-rust-bright"
              >
                {BRAND.phone}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-mute">Piš</span>
              <a
                href={BRAND.emailHref}
                className="break-words text-fg hover:text-rust-bright"
              >
                {BRAND.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-mute">Sleduj</span>
              <span className="break-words text-fg">{BRAND.ig}</span>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-mute md:flex-row md:items-center">
          <span>
            © {year} {BRAND.name} · {BRAND.ic} · Všechna práva vyhrazena
          </span>
          <span>Vyrobeno s respektem k výškám.</span>
          <div className="flex items-center gap-4">
            <a href="#poptavka" className="hover:text-fg">
              Poptat zásah ↗
            </a>
            <a href="#top" className="hover:text-fg">
              Nahoru ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

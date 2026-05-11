import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim",
        className,
      )}
    >
      <span className="tabular text-rust-bright">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{title}</span>
    </div>
  );
}

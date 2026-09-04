import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  hint: string;
  alt: string;
};

export function BeforeAfter({ before, after, beforeLabel, afterLabel, hint, alt }: Props) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    const pct = ((clientX - box.left) / box.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-4/3 w-full select-none overflow-hidden rounded-lg bg-muted"
        onPointerMove={(e) => {
          if (e.buttons === 1) setFromClientX(e.clientX);
        }}
        onPointerDown={(e) => setFromClientX(e.clientX)}
      >
        <img
          src={after}
          alt={alt}
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 size-full object-cover"
        />
        <img
          src={before}
          alt={`${beforeLabel} — ${alt}`}
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />


        <span className="absolute left-3 top-3 rounded-sm bg-surface/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-widest text-surface-foreground">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-accent px-2 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-foreground">
          {afterLabel}
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 inline-flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lift">
            <MoveHorizontal className="size-4" aria-hidden="true" />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={hint}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MoveHorizontal className="size-3.5" aria-hidden="true" />
        {hint}
      </p>
    </div>
  );
}

import type { ReactNode } from "react";

type Tone = "neutral" | "brand" | "success" | "danger" | "warning";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-muted text-muted-foreground border-border",
  brand: "bg-brand-soft text-primary border-brand/30",
  success: "bg-success-soft text-success border-success/30",
  danger: "bg-danger-soft text-danger border-danger/30",
  warning: "bg-warning/15 text-foreground border-warning/40",
};

export function Pill({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function ProgressBar({
  value,
  max,
  tone = "brand",
  className = "",
  label,
}: {
  value: number;
  max: number;
  tone?: Tone;
  className?: string;
  label?: string;
}) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  const fill =
    tone === "success"
      ? "bg-success"
      : tone === "danger"
        ? "bg-danger"
        : tone === "warning"
          ? "bg-warning"
          : "bg-brand";
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={`h-2 w-full overflow-hidden rounded-full bg-muted ${className}`}
    >
      <div className={`h-full rounded-full ${fill} transition-all duration-500`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  illustrative = false,
}: {
  label: string;
  value: string;
  hint?: string;
  illustrative?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-card p-5 shadow-sm ${illustrative ? "border-dashed" : ""}`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {illustrative ? <Pill tone="warning">Sample</Pill> : null}
      </div>
      <p className="mt-2 font-display text-3xl font-bold text-foreground">{value}</p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function AccuracyRing({
  percent,
  size = 168,
  strokeWidth = 14,
}: {
  percent: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = circumference * (1 - clamped / 100);
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`Accuracy ${clamped}%`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-muted)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute text-center">
        <p className="font-display text-4xl font-bold text-foreground">{clamped}%</p>
        <p className="text-xs font-medium text-muted-foreground">accuracy</p>
      </div>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed bg-card/60 p-10 text-center">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      {children ? <div className="mt-5 flex flex-wrap justify-center gap-3">{children}</div> : null}
    </div>
  );
}

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50";

export const buttonPrimary = `${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90`;
export const buttonSecondary = `${buttonBase} border border-input bg-card text-foreground hover:bg-accent`;
export const buttonHero = `${buttonBase} bg-brand text-white hover:bg-brand/90`;

import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Tomide Williams, home"
    >
      <svg viewBox="0 0 100 100" fill="none" className="h-8 w-8 shrink-0">
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />
        <path
          d="M 25 35 L 75 35"
          stroke="var(--color-accent-bright)"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M 50 35 L 50 75"
          stroke="var(--color-accent-bright)"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M 20 25 L 35 80 L 50 55 L 65 80 L 80 25"
          stroke="#050505"
          strokeWidth="10"
          strokeLinejoin="bevel"
        />
        <path
          d="M 20 25 L 35 80 L 50 55 L 65 80 L 80 25"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinejoin="bevel"
        />
      </svg>
      <span className="font-display text-sm tracking-[0.12em] uppercase text-foreground">
        Tomide Williams
      </span>
    </Link>
  );
}

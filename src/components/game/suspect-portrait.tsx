/** Retrato procedural: cada sospechoso recibe una silueta noir con su color de dossier. */

export function SuspectPortrait({
  name,
  color,
  size = 40,
  className,
}: {
  name: string;
  color: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 ${className ?? ""}`}
      style={{ width: size, height: size, backgroundColor: color }}
    >
      <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full opacity-70" aria-hidden>
        <path
          d="M4 40 C4 24 12 18 20 18 C28 18 36 24 36 40 Z"
          fill="rgba(0,0,0,0.45)"
        />
        <circle cx="20" cy="12.5" r="6.5" fill="rgba(0,0,0,0.35)" />
        <path
          d="M4 40 C4 34 9 30 15 30 C16 25 18 23.5 20 23.5 C22 23.5 24 25 25 30 C31 30 36 34 36 40 Z"
          fill="rgba(10,10,11,0.55)"
        />
      </svg>
      <span
        className="relative font-display font-medium"
        style={{ fontSize: size * 0.34, color: "rgba(234,231,224,0.92)" }}
      >
        {initials}
      </span>
    </div>
  );
}
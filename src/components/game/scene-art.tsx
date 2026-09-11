/** Escenas procedurales: cada caso tiene una identidad visual dibujada en SVG. */

const scenes = {
  museo: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3" opacity="0.9">
        <path d="M220 150 L220 70 L420 70 L420 150" />
        <path d="M120 150 V90 M150 150 V90 M180 150 V90" />
        <path d="M480 70 h260 v80 h-260 z" />
        <path d="M560 70 V150 M640 70 V150" />
        <circle cx="560" cy="110" r="12" />
        <circle cx="640" cy="110" r="12" />
      </g>
      <g fill="currentColor" opacity="0.5">
        <path d="M330 150 C330 120 355 110 390 110 C425 110 450 120 450 150 Z" />
      </g>
      <path d="M720 150 L820 40 L820 150 Z" fill="currentColor" opacity="0.35" />
    </>
  ),
  tren: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M40 160 H760" />
        <g strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5">
          <line x1="60" y1="176" x2="240" y2="122" />
          <line x1="240" y1="122" x2="520" y2="122" />
          <line x1="740" y1="176" x2="520" y2="122" />
        </g>
        <path d="M180 120 h440 v-55 h-440 z" />
        <path d="M200 65 v-18 h400 v18" />
        <g strokeWidth="2">
          <circle cx="280" cy="52" r="5" />
          <circle cx="380" cy="52" r="5" />
          <circle cx="480" cy="52" r="5" />
          <circle cx="580" cy="52" r="5" />
        </g>
      </g>
      <g stroke="currentColor" strokeWidth="2" opacity="0.6">
        <line x1="620" y1="140" x2="700" y2="140" />
        <circle cx="710" cy="140" r="10" />
      </g>
    </>
  ),
  hotel: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="200" y="52" width="400" height="104" />
        <rect x="224" y="40" width="40" height="14" />
        <rect x="360" y="40" width="40" height="14" />
        <rect x="496" y="40" width="40" height="14" />
        <line x1="400" y1="52" x2="400" y2="156" />
        <line x1="320" y1="52" x2="320" y2="156" />
        <line x1="480" y1="52" x2="480" y2="156" />
      </g>
      <g fill="currentColor" opacity="0.55">
        <rect x="238" y="68" width="54" height="18" />
        <rect x="238" y="100" width="54" height="18" />
        <rect x="358" y="68" width="54" height="18" />
        <rect x="358" y="100" width="54" height="18" />
        <rect x="478" y="68" width="54" height="18" />
        <rect x="478" y="100" width="54" height="18" />
      </g>
    </>
  ),
  caja: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="250" y="90" width="300" height="66" rx="4" />
        <circle cx="400" cy="123" r="30" />
        <line x1="400" y1="103" x2="400" y2="143" />
        <line x1="380" y1="123" x2="420" y2="123" />
        <line x1="300" y1="105" x2="330" y2="105" />
      </g>
      <path d="M230 156 h340 M250 164 h300" stroke="currentColor" strokeWidth="3" opacity="0.4" />
    </>
  ),
  planta: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="180" y="80" width="180" height="76" rx="10" />
        <rect x="220" y="120" width="30" height="36" />
        <rect x="440" y="70" width="150" height="86" rx="8" />
        <circle cx="515" cy="52" r="26" />
      </g>
      <g fill="currentColor" opacity="0.4">
        <circle cx="515" cy="52" r="18" />
        <rect x="455" y="96" width="14" height="14" />
        <rect x="485" y="96" width="14" height="14" />
        <rect x="515" y="96" width="14" height="14" />
        <rect x="545" y="96" width="14" height="14" />
      </g>
    </>
  ),
  velero: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M150 150 C150 120 300 118 300 150 Z" />
        <path d="M300 150 C300 118 455 120 455 150 Z" />
        <line x1="300" y1="150" x2="610" y2="162" opacity="0.7" />
        <line x1="150" y1="162" x2="610" y2="176" opacity="0.7" />
      </g>
      <path d="M300 54 L372 150 H300 Z" fill="currentColor" opacity="0.4" />
      <g stroke="currentColor" strokeWidth="2" opacity="0.6">
        <path d="M120 150 q20 -14 40 0" fill="none" />
        <path d="M640 150 q20 -14 40 0" fill="none" />
      </g>
    </>
  ),
  escenario: (
    <>
      <path d="M120 40 H680 V160 H120 Z" fill="currentColor" opacity="0.12" />
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M120 40 C160 110 200 40 240 110 C280 40 320 110 360 70" opacity="0.8" />
        <path d="M430 40 C470 110 510 40 550 110 C590 40 630 110 680 40" opacity="0.8" />
        <path d="M120 40 H680" />
        <path d="M80 160 H720 V176 H80 Z" fill="currentColor" opacity="0.4" />
      </g>
      <path d="M360 150 C360 128 370 118 400 118 C430 118 440 128 440 150 Z" fill="currentColor" opacity="0.5" />
    </>
  ),
  incendio: (
    <>
      <g fill="currentColor" opacity="0.5">
        <path d="M280 156 C270 120 300 108 315 80 C330 106 352 118 352 140 C352 150 348 156 340 156 Z" />
        <path d="M420 156 C412 128 438 118 452 92 C466 116 484 128 484 146 C484 152 480 156 474 156 Z" />
        <path d="M348 156 C344 140 358 132 368 116 C376 130 388 138 388 150 Z" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="160" y="110" width="170" height="46" />
        <rect x="506" y="118" width="150" height="38" />
        <path d="M150 140 h60 M150 124 h60 M480 132 h50 M480 148 h50" opacity="0.6" />
        <path d="M160 240 M520 120" opacity="0" />
      </g>
      <path d="M320 156 C320 130 340 118 360 118 C378 118 390 130 390 150 Z" fill="currentColor" opacity="0.35" />
    </>
  ),
  oficina: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="150" y="90" width="180" height="66" rx="4" />
        <rect x="230" y="100" width="26" height="20" />
        <path d="M430 156 V100 L560 100 V156" />
        <g strokeWidth="2">
          <line x1="350" y1="120" x2="430" y2="120" />
          <line x1="350" y1="140" x2="400" y2="140" />
        </g>
      </g>
      <g fill="currentColor" opacity="0.4">
        <rect x="470" y="116" width="18" height="18" />
        <rect x="500" y="116" width="18" height="18" />
        <rect x="530" y="116" width="18" height="18" />
      </g>
    </>
  ),
  puente: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M120 100 H680" />
        <path d="M160 100 V60 M260 100 V60 M400 100 V40 M520 100 V60 M640 100 V60" />
        <path d="M160 60 H640" opacity="0.7" />
        <path d="M400 40 V100" strokeWidth="5" />
      </g>
      <g stroke="currentColor" strokeWidth="2" opacity="0.5">
        <line x1="200" y1="60" x2="200" y2="100" strokeDasharray="4 6" />
      </g>
      <path d="M90 100 q0 40 60 40 M710 100 q0 40 -60 40" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
    </>
  ),
} as const;

function scenePath(name: string) {
  return scenes[name as keyof typeof scenes] ?? scenes.oficina;
}

export function SceneArt({
  scene,
  code,
  className,
}: {
  scene: string;
  code?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={`Escena del caso ${code ?? ""}`}
    >
      <defs>
        <linearGradient id="scene-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#18181b" />
          <stop offset="1" stopColor="#0a0a0b" />
        </linearGradient>
        <linearGradient id="scene-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(199,160,47,0.16)" />
          <stop offset="0.5" stopColor="rgba(199,160,47,0.03)" />
          <stop offset="1" stopColor="rgba(169,46,46,0.14)" />
        </linearGradient>
      </defs>
      <rect width="800" height="200" fill="url(#scene-bg)" />
      <rect width="800" height="200" fill="url(#scene-glow)" />
      <g className="text-gold" transform="translate(0,10)">
        {scenePath(scene)}
      </g>
      {code && (
        <text
          x="790"
          y="188"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          letterSpacing="0.18em"
          fill="rgba(98,96,88,0.55)"
        >
          {code}
        </text>
      )}
    </svg>
  );
}
import React from 'react';

interface HeroFallbackVFXProps {
  reducedMotion?: boolean;
}

/**
 * Lightweight SVG & CSS liquid-glass VFX fallback used while the 3D scene
 * lazy-loads, on devices without WebGL, or when reduced motion is preferred.
 */
export const HeroFallbackVFX: React.FC<HeroFallbackVFXProps> = ({ reducedMotion = false }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Soft ambient cyan & royal blue orbs */}
      <div
        className={`absolute -top-24 right-[-6%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(39,185,236,0.28)_0%,rgba(185,229,255,0.16)_45%,transparent_72%)] blur-2xl ${
          reducedMotion ? '' : 'animate-pulse-glow'
        }`}
      />
      <div
        className={`absolute bottom-[-10%] left-[8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.16)_0%,rgba(234,247,255,0.45)_50%,transparent_75%)] blur-2xl ${
          reducedMotion ? '' : 'animate-float-slow'
        }`}
      />

      {/* Abstract liquid-glass ribbons */}
      <svg
        viewBox="0 0 1440 720"
        fill="none"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full opacity-80 ${
          reducedMotion ? '' : 'animate-wave-flow'
        }`}
      >
        <defs>
          <linearGradient id="sredatecRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9E5FF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#27B9EC" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#1769C2" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="sredatecRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27B9EC" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#B9E5FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M-80 490 C 260 320, 560 590, 920 390 C 1180 245, 1340 290, 1520 180 L 1520 740 L -80 740 Z"
          fill="url(#sredatecRibbon1)"
        />
        <path
          d="M-60 560 C 310 420, 620 650, 980 465 C 1220 340, 1360 360, 1520 260"
          stroke="url(#sredatecRibbon2)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M540 120 C 780 60, 1020 240, 1480 110"
          stroke="url(#sredatecRibbon2)"
          strokeWidth="2.5"
          strokeDasharray="6 10"
        />
      </svg>

      {/* Floating glass geometric ring */}
      <div
        className={`absolute right-[10%] top-[22%] hidden h-64 w-64 rounded-full border border-[#27B9EC]/30 bg-gradient-to-br from-white/50 via-[#EAF7FF]/40 to-[#B9E5FF]/20 shadow-[0_0_60px_rgba(39,185,236,0.22)] backdrop-blur-md lg:block ${
          reducedMotion ? '' : 'animate-float-slow'
        }`}
      >
        <div className="absolute inset-6 rounded-full border border-[#1769C2]/20" />
        <div className="absolute inset-14 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(39,185,236,0.2))]" />
      </div>
    </div>
  );
};

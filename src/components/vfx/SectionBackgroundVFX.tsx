import React from 'react';
import { usePrefersReducedMotion } from '../../hooks/useMediaCapabilities';

interface SectionBackgroundVFXProps {
  variant: 'particles-network' | 'liquid-wave' | 'ambient-orbs';
}

/**
 * Selective lightweight VFX accents for non-hero sections.
 * Keeps content backgrounds clean and predominantly white for readability.
 */
export const SectionBackgroundVFX: React.FC<SectionBackgroundVFXProps> = ({ variant }) => {
  const reducedMotion = usePrefersReducedMotion();

  if (variant === 'particles-network') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#EAF7FF] opacity-80 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#B9E5FF]/35 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#27B9EC" strokeOpacity="0.24" strokeWidth="1">
            <line x1="90" y1="120" x2="260" y2="190" />
            <line x1="260" y1="190" x2="430" y2="95" />
            <line x1="260" y1="190" x2="360" y2="320" />
            <line x1="880" y1="110" x2="1040" y2="210" />
            <line x1="1040" y1="210" x2="1120" y2="90" />
            <line x1="920" y1="360" x2="1040" y2="210" />
            <line x1="740" y1="470" x2="920" y2="360" />
          </g>
          {[
            [90, 120, 3.5],
            [260, 190, 4.5],
            [430, 95, 3],
            [360, 320, 3.5],
            [880, 110, 3.5],
            [1040, 210, 5],
            [1120, 90, 3],
            [920, 360, 4],
            [740, 470, 3],
          ].map(([cx, cy, r], idx) => (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r={r}
              fill="#27B9EC"
              fillOpacity="0.45"
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === 'liquid-wave') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-24 right-[12%] h-64 w-64 rounded-full bg-[#B9E5FF]/35 blur-3xl ${
            reducedMotion ? '' : 'animate-pulse-glow'
          }`}
        />
        <svg
          className={`absolute bottom-0 left-0 w-full opacity-55 ${
            reducedMotion ? '' : 'animate-wave-flow'
          }`}
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveSectionGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EAF7FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#B9E5FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#27B9EC" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path
            d="M0 130 C 320 40, 620 200, 980 105 C 1220 40, 1360 110, 1440 85 L 1440 220 L 0 220 Z"
            fill="url(#waveSectionGrad)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute top-12 left-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(39,185,236,0.18)_0%,transparent_70%)] blur-2xl ${
          reducedMotion ? '' : 'animate-float-slow'
        }`}
      />
      <div
        className={`absolute bottom-8 right-[6%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.12)_0%,rgba(185,229,255,0.22)_45%,transparent_72%)] blur-2xl ${
          reducedMotion ? '' : 'animate-pulse-glow'
        }`}
      />
    </div>
  );
};

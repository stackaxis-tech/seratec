import React, { Component, ReactNode, Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { useIsMobile, usePrefersReducedMotion, useWebGLSupport } from '../hooks/useMediaCapabilities';
import { HeroFallbackVFX } from './vfx/HeroFallbackVFX';

const HeroCanvas3D = lazy(() => import('./vfx/HeroCanvas3D'));

class CanvasErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: ReactNode; children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroSection: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const webglSupported = useWebGLSupport();
  const isMobile = useIsMobile();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const handleScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / 700, 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reducedMotion]);

  const show3D = webglSupported && !reducedMotion;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#EAF7FF] to-[#B9E5FF]/55 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:flex lg:min-h-[780px] lg:items-center"
    >
      {/* Soft glowing atmospheric light layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-[-8%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(185,229,255,0.55)_0%,rgba(234,247,255,0.2)_55%,transparent_75%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[12%] right-[-6%] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(39,185,236,0.22)_0%,rgba(185,229,255,0.18)_50%,transparent_75%)] blur-3xl"
      />

      {/* Lazy-loaded 3D VFX Canvas with static SVG/CSS fallback for unsupported or reduced-motion devices */}
      {show3D ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-95"
        >
          <CanvasErrorBoundary fallback={<HeroFallbackVFX reducedMotion={reducedMotion} />}>
            <Suspense fallback={<HeroFallbackVFX reducedMotion={reducedMotion} />}>
              <HeroCanvas3D scrollProgress={scrollProgress} isMobile={isMobile} />
            </Suspense>
          </CanvasErrorBoundary>
        </div>
      ) : (
        <HeroFallbackVFX reducedMotion={reducedMotion} />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <motion.div
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#27B9EC]/35 bg-white/85 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#1769C2] shadow-[0_6px_20px_-6px_rgba(39,185,236,0.35)] backdrop-blur-md sm:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#27B9EC]" />
              <span>Enterprise Software & Intelligent IT Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 font-display text-[2rem] leading-[1.12] font-extrabold tracking-tight text-[#063B85] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]"
            >
              Technology That Moves{' '}
              <span className="bg-gradient-to-r from-[#1769C2] via-[#27B9EC] to-[#063B85] bg-clip-text text-transparent">
                Businesses Forward.
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[#063B85]/80 sm:text-lg"
            >
              {BRAND.heroSubheadline}
            </motion.p>

            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#063B85] via-[#1769C2] to-[#27B9EC] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-8px_rgba(23,105,194,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-6px_rgba(39,185,236,0.55)] sm:text-base"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#B9E5FF] bg-white/85 px-7 py-3.5 text-sm font-semibold text-[#063B85] shadow-[0_10px_28px_-10px_rgba(6,59,133,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#27B9EC] hover:bg-[#EAF7FF] sm:text-base"
              >
                Talk to Our Team
              </a>
            </motion.div>

            {/* Subtle glassmorphic trust pillars */}
            <motion.div
              initial={{ y: 14 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {[
                { icon: Layers, label: 'Scalable Products', sub: 'Cloud-native architecture' },
                { icon: Zap, label: 'Operational Speed', sub: 'Automated workflows' },
                { icon: ShieldCheck, label: 'Enterprise Reliability', sub: 'Built for longevity' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-panel rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <item.icon className="h-5 w-5 text-[#27B9EC]" />
                  <p className="mt-2 text-sm font-bold text-[#063B85]">{item.label}</p>
                  <p className="text-xs text-[#063B85]/65">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column intentionally open so the 3D VFX sculpture & ribbons remain unobstructed */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

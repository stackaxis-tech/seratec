import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#B9E5FF]/60 bg-white/95 py-3 shadow-[0_10px_35px_-12px_rgba(6,59,133,0.12)] backdrop-blur-xl'
          : 'border-b border-[#EAF7FF]/80 bg-white/92 py-3.5 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#hero"
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B9EC] rounded-lg"
          aria-label="Sredatec Solutions Home"
        >
          <img
            src={BRAND.logoSrc}
            alt="Sredatec Solutions"
            className="h-11 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
            loading="eager"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#063B85]/80 transition-colors hover:text-[#1769C2]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1769C2] to-[#27B9EC] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-6px_rgba(23,105,194,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-6px_rgba(39,185,236,0.55)]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#B9E5FF] bg-white/80 text-[#063B85] transition-colors hover:bg-[#EAF7FF] md:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="border-t border-[#B9E5FF]/60 bg-white/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-semibold text-[#063B85] transition-colors hover:bg-[#EAF7FF] hover:text-[#1769C2]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1769C2] to-[#27B9EC] px-5 py-3 text-sm font-semibold text-white shadow-md"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

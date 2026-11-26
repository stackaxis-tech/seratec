import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#B9E5FF]/70 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <img
              src={BRAND.logoSrc}
              alt="Sredatec Solutions"
              className="h-11 w-auto object-contain mix-blend-multiply"
              loading="lazy"
            />
            <p className="mt-3 max-w-md text-sm text-[#063B85]/70">
              {BRAND.heroHeadline} {BRAND.heroSubheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
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
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#B9E5FF] bg-[#EAF7FF] px-4 py-2 text-xs font-bold text-[#1769C2] transition-colors hover:border-[#27B9EC] hover:bg-[#B9E5FF]/40"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#27B9EC]" />
              {BRAND.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[#EAF7FF] pt-6 text-xs text-[#063B85]/60 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Hotel Management Application &bull; Lawyer Diary Application &bull; Enterprise IT</p>
        </div>
      </div>
    </footer>
  );
};

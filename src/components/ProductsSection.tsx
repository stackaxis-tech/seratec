import React from 'react';
import { motion } from 'framer-motion';
import {
  BedDouble,
  CalendarCheck2,
  CheckCircle2,
  Scale,
  Clock,
  FileText,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  BellRing,
} from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import { SectionBackgroundVFX } from './vfx/SectionBackgroundVFX';

const HotelDashboardMockup: React.FC = () => (
  <div className="relative mt-8 rounded-2xl border border-[#B9E5FF] bg-white/90 p-4 pt-5 shadow-[0_18px_40px_-15px_rgba(23,105,194,0.18)]">
    {/* Mockup top bar */}
    <div className="flex items-center justify-between border-b border-[#EAF7FF] pb-3">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#27B9EC]" />
        <span className="text-xs font-bold text-[#063B85]">Front Desk & Occupancy Live</span>
      </div>
      <span className="rounded-full bg-[#EAF7FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#1769C2]">
        92% Occupied
      </span>
    </div>

    {/* Room status grid */}
    <div className="mt-3.5 grid grid-cols-3 gap-2">
      {[
        { room: 'Suite 301', status: 'Checked In', tone: 'bg-[#EAF7FF] text-[#1769C2]' },
        { room: 'Deluxe 204', status: 'Ready', tone: 'bg-cyan-50 text-[#063B85]' },
        { room: 'Exec 408', status: 'VIP Arrival', tone: 'bg-[#1769C2] text-white' },
      ].map((cell) => (
        <div
          key={cell.room}
          className={`rounded-xl border border-[#B9E5FF]/50 px-2.5 py-2 text-center ${cell.tone}`}
        >
          <p className="text-[11px] font-bold">{cell.room}</p>
          <p className="mt-0.5 text-[10px] opacity-85">{cell.status}</p>
        </div>
      ))}
    </div>

    {/* Occupancy bar chart */}
    <div className="mt-4 flex items-end justify-between gap-1.5 rounded-xl bg-[#EAF7FF]/60 p-3">
      {[48, 66, 74, 88, 92, 81, 95].map((height, idx) => (
        <div key={idx} className="flex flex-1 flex-col items-center gap-1">
          <div
            className="w-full rounded-t-md bg-gradient-to-t from-[#1769C2] to-[#27B9EC]"
            style={{ height: `${Math.round(height * 0.42)}px` }}
          />
          <span className="text-[9px] font-medium text-[#063B85]/60">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
          </span>
        </div>
      ))}
    </div>

    {/* Floating UI element */}
    <div className="glass-panel absolute -top-6 right-3 hidden items-center gap-2 rounded-xl px-3 py-1.5 shadow-lg transition-transform duration-300 group-hover:-translate-y-1.5 sm:flex">
      <TrendingUp className="h-4 w-4 text-[#27B9EC]" />
      <div>
        <p className="text-[10px] font-medium text-[#063B85]/65">RevPAR Growth</p>
        <p className="text-xs font-bold text-[#063B85]">+24.8% Monthly</p>
      </div>
    </div>

    {/* Floating bottom pill */}
    <div className="glass-panel absolute -bottom-3 left-4 hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#1769C2] shadow-md transition-transform duration-300 group-hover:translate-x-1 sm:flex">
      <CalendarCheck2 className="h-3.5 w-3.5 text-[#27B9EC]" />
      <span>Instant Check-In & Folio Sync</span>
    </div>
  </div>
);

const LawyerDashboardMockup: React.FC = () => (
  <div className="relative mt-8 rounded-2xl border border-[#B9E5FF] bg-white/90 p-4 pt-5 shadow-[0_18px_40px_-15px_rgba(6,59,133,0.18)]">
    {/* Mockup top bar */}
    <div className="flex items-center justify-between border-b border-[#EAF7FF] pb-3">
      <div className="flex items-center gap-2">
        <Scale className="h-4 w-4 text-[#1769C2]" />
        <span className="text-xs font-bold text-[#063B85]">Daily Cause List & Hearings</span>
      </div>
      <span className="rounded-full bg-[#063B85] px-2.5 py-0.5 text-[11px] font-semibold text-white">
        4 Hearings Today
      </span>
    </div>

    {/* Hearing timeline items */}
    <div className="mt-3.5 space-y-2.5">
      {[
        {
          time: '10:30 AM',
          court: 'High Court • Bench IV',
          caseNo: 'WP(C) 1842/2026 — Argument Stage',
          active: true,
        },
        {
          time: '02:15 PM',
          court: 'District Court • Hall 2',
          caseNo: 'OS 419/2025 — Evidence Filing',
          active: false,
        },
      ].map((entry) => (
        <div
          key={entry.caseNo}
          className={`flex items-center justify-between rounded-xl border px-3 py-2.5 ${
            entry.active
              ? 'border-[#27B9EC]/60 bg-gradient-to-r from-[#EAF7FF] to-white'
              : 'border-[#EAF7FF] bg-[#EAF7FF]/35'
          }`}
        >
          <div className="flex items-start gap-2.5">
            <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#27B9EC]" />
            <div>
              <p className="text-[11px] font-bold text-[#063B85]">{entry.caseNo}</p>
              <p className="text-[10px] text-[#063B85]/65">{entry.court}</p>
            </div>
          </div>
          <span className="shrink-0 rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#1769C2] shadow-xs">
            {entry.time}
          </span>
        </div>
      ))}
    </div>

    {/* Document & Case search strip */}
    <div className="mt-3.5 flex items-center justify-between rounded-xl border border-[#B9E5FF]/60 bg-[#EAF7FF]/55 px-3 py-2">
      <div className="flex items-center gap-2 text-[11px] font-medium text-[#063B85]">
        <FileText className="h-3.5 w-3.5 text-[#1769C2]" />
        <span>Case Briefs & Precedents Indexed</span>
      </div>
      <span className="text-[11px] font-bold text-[#27B9EC]">100% Synced</span>
    </div>

    {/* Floating notification badge */}
    <div className="glass-panel absolute -top-6 right-3 hidden items-center gap-2 rounded-xl px-3 py-1.5 shadow-lg transition-transform duration-300 group-hover:-translate-y-1.5 sm:flex">
      <BellRing className="h-4 w-4 text-[#1769C2]" />
      <div>
        <p className="text-[10px] font-medium text-[#063B85]/65">Automated Alert</p>
        <p className="text-xs font-bold text-[#063B85]">Next Date Reminder</p>
      </div>
    </div>

    {/* Floating bottom pill */}
    <div className="glass-panel absolute -bottom-3 left-4 hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#063B85] shadow-md transition-transform duration-300 group-hover:translate-x-1 sm:flex">
      <Sparkles className="h-3.5 w-3.5 text-[#27B9EC]" />
      <span>Zero Missed Court Dates</span>
    </div>
  </div>
);

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <SectionBackgroundVFX variant="particles-network" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9E5FF] bg-[#EAF7FF] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1769C2]">
            Flagship Software Products
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#063B85] sm:text-4xl">
            Purpose-Built Products for Modern Industries
          </h2>
          <p className="mt-4 text-base text-[#063B85]/75 sm:text-lg">
            Crafted with intuitive interfaces, real-time precision, and resilient cloud foundations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {PRODUCTS.map((product, index) => {
            const isHotel = product.id === 'hotel-management';

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0.9, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`group glow-border-hover relative rounded-3xl p-7 sm:p-9 ${
                  isHotel
                    ? 'bg-gradient-to-br from-[#EAF7FF] via-white to-[#B9E5FF]/45'
                    : 'bg-gradient-to-br from-white via-[#EAF7FF]/90 to-[#B9E5FF]/60'
                } border border-[#B9E5FF]/85 shadow-[0_24px_60px_-20px_rgba(6,59,133,0.14)] backdrop-blur-xl`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${
                        isHotel
                          ? 'bg-gradient-to-br from-[#27B9EC] to-[#1769C2] text-white'
                          : 'bg-gradient-to-br from-[#063B85] to-[#1769C2] text-white'
                      }`}
                    >
                      {isHotel ? <BedDouble className="h-6 w-6" /> : <Scale className="h-6 w-6" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#27B9EC]">
                        {product.tagline}
                      </p>
                      <h3 className="font-display text-xl font-extrabold text-[#063B85] sm:text-2xl">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#B9E5FF] bg-white/85 px-3 py-1 text-xs font-semibold text-[#1769C2]">
                    {product.accentBadge}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#063B85]/80 sm:text-base">
                  {product.description}
                </p>

                {/* Distinct Dashboard Mockup */}
                <div className="pb-3">
                  {isHotel ? <HotelDashboardMockup /> : <LawyerDashboardMockup />}
                </div>

                {/* Highlights */}
                <ul className="mt-6 space-y-2.5">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#063B85]/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#27B9EC]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center justify-between border-t border-[#B9E5FF]/60 pt-5">
                  <span className="text-xs font-semibold text-[#063B85]/60">
                    Web & Cloud Ready
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1769C2] transition-colors group-hover:text-[#063B85]"
                  >
                    Request a Demo
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

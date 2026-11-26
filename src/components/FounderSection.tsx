import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Compass } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { SectionBackgroundVFX } from './vfx/SectionBackgroundVFX';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <SectionBackgroundVFX variant="ambient-orbs" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#B9E5FF]/85 bg-gradient-to-br from-white via-[#EAF7FF]/70 to-[#B9E5FF]/35 shadow-[0_28px_70px_-24px_rgba(6,59,133,0.16)]">
          <div className="grid items-center lg:grid-cols-12">
            {/* Left Light-Blue Visual Split with Founder Portrait */}
            <motion.div
              initial={{ opacity: 0.92, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center bg-gradient-to-br from-[#EAF7FF] via-[#B9E5FF]/45 to-white p-8 sm:p-12 lg:col-span-5"
            >
              {/* Subtle ambient blue rings & glowing aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(39,185,236,0.28)_0%,transparent_70%)] blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-6 rounded-3xl border border-white/80"
              />

              <div className="relative z-10 w-full max-w-[330px]">
                <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_24px_50px_-15px_rgba(6,59,133,0.28)]">
                  <img
                    src={BRAND.founderImage}
                    alt={`${BRAND.founderName} — ${BRAND.founderTitle}`}
                    className="aspect-square w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Glass name badge */}
                <div className="glass-panel -mt-6 mx-4 relative z-20 rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="font-display text-base font-extrabold text-[#063B85]">
                    {BRAND.founderName}
                  </p>
                  <p className="text-xs font-semibold text-[#1769C2]">{BRAND.founderTitle}</p>
                </div>
              </div>
            </motion.div>

            {/* Right White Content Split */}
            <motion.div
              initial={{ opacity: 0.92, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/85 p-8 backdrop-blur-md sm:p-12 lg:col-span-7 lg:p-14"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9E5FF] bg-[#EAF7FF] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1769C2]">
                Leadership
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#063B85] sm:text-4xl">
                {BRAND.founderName}
              </h2>
              <p className="mt-1.5 text-base font-semibold text-[#27B9EC]">
                {BRAND.founderTitle}
              </p>

              <div className="mt-7 rounded-2xl border border-[#B9E5FF]/65 bg-gradient-to-br from-[#EAF7FF]/65 to-white p-6">
                <Quote className="h-7 w-7 text-[#27B9EC]" />
                <p className="mt-3 text-base leading-relaxed text-[#063B85]/85 sm:text-lg">
                  &ldquo;At Sredatec Solutions, our mission is straightforward: engineer thoughtful,
                  dependable software products and intelligent IT systems that remove operational
                  friction and empower organizations to grow with clarity and confidence.&rdquo;
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-[#EAF7FF] bg-white p-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#1769C2]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#063B85]">Product-First Vision</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#063B85]/70">
                      Delivering domain-focused platforms like Hotel Management and Lawyer Diary.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#EAF7FF] bg-white p-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#1769C2]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#063B85]">Engineering Excellence</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#063B85]/70">
                      Combining international quality standards with agile, client-centric delivery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

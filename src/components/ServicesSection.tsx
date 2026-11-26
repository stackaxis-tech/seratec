import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Palette, CloudCog, ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/siteData';
import { SectionBackgroundVFX } from './vfx/SectionBackgroundVFX';

const ICON_MAP: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  Smartphone,
  Palette,
  CloudCog,
};

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#EAF7FF]/55 via-white to-white py-24 sm:py-28"
    >
      <SectionBackgroundVFX variant="liquid-wave" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9E5FF] bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1769C2] shadow-xs">
            Engineering & Digital Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#063B85] sm:text-4xl">
            End-to-End Technology Capabilities
          </h2>
          <p className="mt-4 text-base text-[#063B85]/75 sm:text-lg">
            From bespoke software architecture to cloud-native deployment, we build systems designed
            to scale with your business.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0.9, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group glow-border-hover flex flex-col justify-between rounded-3xl border border-[#B9E5FF]/80 bg-white/85 p-7 backdrop-blur-lg ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#B9E5FF] bg-gradient-to-br from-[#EAF7FF] to-white text-[#1769C2] shadow-[0_8px_20px_-6px_rgba(39,185,236,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#27B9EC] group-hover:bg-gradient-to-br group-hover:from-[#1769C2] group-hover:to-[#27B9EC] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#27B9EC]/50 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#27B9EC]" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-[#063B85] transition-colors group-hover:text-[#1769C2]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#063B85]/75">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EAF7FF]">
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full bg-[#EAF7FF]/80 px-2.5 py-1 text-[11px] font-semibold text-[#1769C2]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1769C2] transition-colors group-hover:text-[#27B9EC]"
                  >
                    Discuss Requirements
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, Phone, Sparkles, Shield } from 'lucide-react';
import { BRAND, PRODUCTS, SERVICES } from '../data/siteData';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  interest: 'Custom Software Development',
  message: '',
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    ...PRODUCTS.map((p) => p.name),
    ...SERVICES.map((s) => s.title),
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappPrefillUrl = `${BRAND.whatsappUrl}?text=${encodeURIComponent(
    `Hello Sredatec Solutions, I am ${form.name || 'a prospective client'} interested in ${
      form.interest
    }.${form.message ? ` Details: ${form.message}` : ''}`
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#EAF7FF] via-[#B9E5FF]/55 to-[#EAF7FF] py-24 sm:py-28"
    >
      {/* Ambient glowing highlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[12%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(39,185,236,0.28)_0%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[8%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.18)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left column: Contact & WhatsApp integration */}
          <motion.div
            initial={{ opacity: 0.92, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27B9EC]/40 bg-white/85 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1769C2]">
              <Sparkles className="h-3.5 w-3.5 text-[#27B9EC]" />
              Connect With Us
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#063B85] sm:text-4xl">
              Let&apos;s Build What Moves Your Business Forward
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#063B85]/80">
              Whether you are exploring our Hotel Management Application, Lawyer Diary Application,
              or a tailored enterprise engineering engagement, our team is ready to help.
            </p>

            {/* WhatsApp Direct Integration Card */}
            <div className="glass-panel mt-8 rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#27B9EC] to-[#1769C2] text-white shadow-md">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1769C2]">
                    Direct WhatsApp Concierge
                  </p>
                  <p className="mt-1 font-display text-xl font-extrabold text-[#063B85]">
                    {BRAND.whatsappDisplay}
                  </p>
                  <p className="mt-1 text-xs text-[#063B85]/70">
                    Instant consultation for demos, custom software, and project scoping.
                  </p>
                </div>
              </div>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#063B85] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-8px_rgba(6,59,133,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1769C2]"
              >
                <Phone className="h-4 w-4 text-[#27B9EC]" />
                Chat on WhatsApp ({BRAND.whatsappDisplay})
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2.5 text-xs font-medium text-[#063B85]/75">
              <Shield className="h-4 w-4 text-[#1769C2]" />
              <span>Your inquiry is handled directly by Sredatec Solutions leadership & engineering.</span>
            </div>
          </motion.div>

          {/* Right column: White glass-effect contact form */}
          <motion.div
            initial={{ opacity: 0.92, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[2rem] border border-white/90 bg-white/88 p-7 shadow-[0_28px_70px_-20px_rgba(6,59,133,0.18)] backdrop-blur-2xl sm:p-10">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#27B9EC]">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-[#063B85]">
                    Thank You, {form.name || 'Partner'}!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#063B85]/75">
                    Your inquiry regarding <span className="font-semibold text-[#1769C2]">{form.interest}</span>{' '}
                    has been prepared. For immediate response, continue directly on WhatsApp or
                    submit another request.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={whatsappPrefillUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1769C2] to-[#27B9EC] px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send Details via WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(INITIAL_FORM);
                        setSubmitted(false);
                      }}
                      className="rounded-full border border-[#B9E5FF] bg-white px-6 py-3 text-sm font-semibold text-[#063B85] transition-colors hover:bg-[#EAF7FF]"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#063B85]/80"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-xl border border-[#B9E5FF] bg-white/95 px-4 py-3 text-sm text-[#063B85] placeholder-[#063B85]/40 transition-all focus:border-[#27B9EC] focus:outline-none focus:ring-4 focus:ring-[#27B9EC]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#063B85]/80"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-xl border border-[#B9E5FF] bg-white/95 px-4 py-3 text-sm text-[#063B85] placeholder-[#063B85]/40 transition-all focus:border-[#27B9EC] focus:outline-none focus:ring-4 focus:ring-[#27B9EC]/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#063B85]/80"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 99959 55252"
                        className="mt-2 w-full rounded-xl border border-[#B9E5FF] bg-white/95 px-4 py-3 text-sm text-[#063B85] placeholder-[#063B85]/40 transition-all focus:border-[#27B9EC] focus:outline-none focus:ring-4 focus:ring-[#27B9EC]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-interest"
                        className="block text-xs font-bold uppercase tracking-wider text-[#063B85]/80"
                      >
                        Product or Service
                      </label>
                      <select
                        id="contact-interest"
                        name="interest"
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-[#B9E5FF] bg-white/95 px-4 py-3 text-sm text-[#063B85] transition-all focus:border-[#27B9EC] focus:outline-none focus:ring-4 focus:ring-[#27B9EC]/20"
                      >
                        {interestOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#063B85]/80"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your goals, timeline, or product demo request..."
                      className="mt-2 w-full resize-none rounded-xl border border-[#B9E5FF] bg-white/95 px-4 py-3 text-sm text-[#063B85] placeholder-[#063B85]/40 transition-all focus:border-[#27B9EC] focus:outline-none focus:ring-4 focus:ring-[#27B9EC]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#063B85] via-[#1769C2] to-[#27B9EC] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_34px_-8px_rgba(23,105,194,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(39,185,236,0.6)] sm:text-base"
                  >
                    <Send className="h-4 w-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

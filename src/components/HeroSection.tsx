import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import NetworkBackground from './NetworkBackground';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handlePlaceholderClick = (label: string) => {
    setSocialNotice(
      `${label} profile link is a placeholder and will be connected once the official URL is provided.`
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/70 bg-[#060A13]"
    >
      {/* Subtle radial atmospheric depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/4 h-[460px] w-[560px] rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/5 h-[360px] w-[480px] rounded-full bg-cyan-500/8 blur-[120px]"
      />

      <NetworkBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-14 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-20">
        {/* Split-screen hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {PORTFOLIO_DATA.profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span>{PORTFOLIO_DATA.profile.experienceYears} Experience</span>
              <span aria-hidden="true">·</span>
              <span>German &amp; English</span>
            </div>

            <h1 className="headline-gradient font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {PORTFOLIO_DATA.hero.greeting}
            </h1>

            <p className="mt-4 font-display text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
              {PORTFOLIO_DATA.hero.headline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {PORTFOLIO_DATA.hero.supportingText}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0"
              >
                <span>Explore My Experience</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:border-cyan-400/50 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0"
              >
                <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Placeholders */}
            <div className="mt-8 border-t border-slate-800/80 pt-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs font-medium text-slate-400">
                  Professional Profiles:
                </span>
                <button
                  type="button"
                  onClick={() => handlePlaceholderClick('LinkedIn')}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Linkedin className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                  <span>LinkedIn (Placeholder)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handlePlaceholderClick('GitHub')}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Github className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                  <span>GitHub (Placeholder)</span>
                </button>
              </div>
              {socialNotice && (
                <p
                  role="status"
                  className="mt-3 text-xs text-cyan-300/90"
                >
                  {socialNotice}
                </p>
              )}
            </div>
          </div>

          {/* Right Visual Container */}
          <div className="lg:col-span-5">
            <div className="glass-surface relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl">
              {!imageError ? (
                <img
                  src={PORTFOLIO_DATA.hero.visualAsset}
                  alt="Abstract architectural glass geometry symbolizing global operations and vendor networks"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover object-center lg:min-h-[420px]"
                />
              ) : (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#0B1426] to-slate-950 p-8 text-center">
                  <div className="mb-3 h-12 w-12 rounded-xl border border-cyan-400/30 bg-cyan-500/10" />
                  <p className="font-display text-sm font-medium text-slate-300">
                    Global Vendor &amp; Operations Architecture
                  </p>
                </div>
              )}

              {/* Measured bottom gradient scrim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060A13]/90 via-[#060A13]/25 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between gap-4 border-t border-slate-700/60 pt-4">
                  <div>
                    <p className="text-xs font-medium text-cyan-300">
                      International Scope
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-100">
                      Vendor Operations · Catalog Accuracy · Export Logistics
                    </p>
                  </div>
                  <a
                    href="#about"
                    aria-label="Jump to About section"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column Highlights Row */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-800/60 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_DATA.hero.highlights.map((item) => (
            <div
              key={item.label}
              className="bg-[#0B1221]/95 px-6 py-5 transition-colors duration-200 hover:bg-[#0E172A]"
            >
              <p className="font-display text-sm font-semibold text-white">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

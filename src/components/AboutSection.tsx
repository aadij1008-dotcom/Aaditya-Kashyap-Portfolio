import { motion } from 'motion/react';
import { Globe2, Handshake, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const HIGHLIGHT_ICONS = [Handshake, ShieldCheck, Globe2];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-slate-800/70 bg-[#070C17] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-wider text-cyan-400">
              About Me
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Operational clarity across international vendors and customer teams
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
              {PORTFOLIO_DATA.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* 3 Highlight Cards Column */}
          <div className="flex flex-col justify-center gap-4 lg:col-span-6">
            {PORTFOLIO_DATA.about.highlights.map((highlight, index) => {
              const Icon = HIGHLIGHT_ICONS[index] || ShieldCheck;
              return (
                <motion.article
                  key={highlight.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-surface glass-surface-hover rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

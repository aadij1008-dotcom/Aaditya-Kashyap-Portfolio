import { motion } from 'motion/react';
import { Languages } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function LanguagesSection() {
  return (
    <section
      id="languages"
      className="border-b border-slate-800/70 bg-[#070C17] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-cyan-400">
            Language Proficiency
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            Multilingual communication across international operations
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Supporting German and English-speaking vendors, customers, and
            cross-functional teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PORTFOLIO_DATA.languages.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-surface glass-surface-hover flex flex-col justify-between rounded-2xl p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.language}
                  </h3>
                  <Languages className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                </div>

                <p className="mt-2 text-sm font-semibold text-cyan-300">
                  {item.proficiency}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.levelNote}
                </p>
              </div>

              {/* Clean 5-Segment Proficiency Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div
                  className="grid grid-cols-5 gap-1.5"
                  role="img"
                  aria-label={`${item.language}: ${item.proficiency} (${item.segmentsFilled} of ${item.totalSegments})`}
                >
                  {Array.from({ length: item.totalSegments }).map((_, idx) => {
                    const active = idx < item.segmentsFilled;
                    return (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-sm transition-colors ${
                          active
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                            : 'bg-slate-800'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

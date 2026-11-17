import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-slate-800/70 bg-[#060A13] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-cyan-400">
            Professional Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            9+ years of progressive operations, mentoring, and vendor support
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Career progression across export logistics, multilingual customer care,
            catalog translation, and vendor associate mentorship.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mt-14">
          {/* Vertical Spine Line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/40 to-slate-800 md:left-8"
          />

          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-14 md:pl-20"
              >
                {/* Company Monogram Marker on Timeline */}
                <div
                  aria-hidden="true"
                  className="absolute top-6 left-0 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/35 bg-[#0B1324] font-mono text-xs font-semibold tracking-tight text-cyan-300 shadow-sm md:left-3"
                >
                  {item.monogram}
                </div>

                <div className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-5 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-cyan-300">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.company}
                        </span>
                        {item.location && (
                          <>
                            <span aria-hidden="true" className="text-slate-600">
                              ·
                            </span>
                            <span className="inline-flex items-center gap-1 text-slate-400">
                              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">
                        {item.position}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-300 tabular-nums whitespace-nowrap shrink-0">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80"
                        />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

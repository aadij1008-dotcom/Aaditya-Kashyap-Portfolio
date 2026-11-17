import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-slate-800/70 bg-[#060A13] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-cyan-400">
            Education
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            Academic qualifications
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/35 to-slate-800 md:left-7"
          />

          <div className="grid grid-cols-1 gap-6">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-14 md:pl-18"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-6 left-0 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/35 bg-[#0B1324] text-cyan-300 md:left-2"
                >
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="glass-surface glass-surface-hover flex flex-col justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-7">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {edu.qualification}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                      <span className="font-medium text-cyan-300">
                        {edu.institution}
                      </span>
                      {edu.location && (
                        <>
                          <span aria-hidden="true" className="text-slate-600">
                            ·
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-400">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="font-mono text-sm font-semibold text-slate-200 tabular-nums whitespace-nowrap shrink-0">
                    {edu.year}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

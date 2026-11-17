import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ValuePropositionSection() {
  return (
    <section
      id="value"
      className="border-b border-slate-800/70 bg-[#060A13] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-cyan-400">
            Professional Value Proposition
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            What I Bring to an Organization
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_DATA.valuePropositions.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-surface glass-surface-hover flex flex-col justify-between rounded-2xl p-6 sm:p-7"
            >
              <div>
                <p className="font-mono text-xs font-semibold tracking-wider text-cyan-400 tabular-nums">
                  {pillar.number}.
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

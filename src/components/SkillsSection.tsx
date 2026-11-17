import { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  Cpu,
  FileSpreadsheet,
  Handshake,
  Headset,
  HeartHandshake,
  Layers,
  MessageSquare,
  ShieldCheck,
  Target,
  Ticket,
  Users,
  Workflow,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ICON_MAP = {
  Handshake,
  Layers,
  ShieldCheck,
  Workflow,
  Users,
  Target,
  HeartHandshake,
  Headset,
  Ticket,
  AlertCircle,
  MessageSquare,
  FileSpreadsheet,
  Cpu,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.competencies
      : PORTFOLIO_DATA.competencies.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="border-b border-slate-800/70 bg-[#070C17] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-cyan-400">
              Core Competencies
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Operational governance, customer experience, and business tools
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter core competencies by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-800 bg-[#0B1221] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {PORTFOLIO_DATA.competencies.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {visibleCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="border-b border-slate-800/80 pb-3">
                <h3 className="font-display text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill, idx) => {
                  const Icon = ICON_MAP[skill.iconName];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.35,
                        delay: idx * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="glass-surface glass-surface-hover group flex items-center gap-4 rounded-xl p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-cyan-300 transition-colors duration-200 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-display text-sm font-semibold text-slate-100 sm:text-base">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

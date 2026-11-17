import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeDownload';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { profile, about, experience, competencies, education, languages } =
    PORTFOLIO_DATA;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0B1221] shadow-2xl"
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-4">
          <div>
            <h2
              id="resume-modal-title"
              className="font-display text-lg font-semibold text-white"
            >
              Curriculum Vitae — {profile.name}
            </h2>
            <p className="text-xs text-slate-400">
              Preview, print as PDF, or download formatted resume
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-cyan-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
            >
              <Printer className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={downloadResumeFile}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download Resume</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet */}
        <div className="overflow-y-auto bg-slate-950/60 p-4 sm:p-8">
          <div
            id="printable-resume"
            className="mx-auto max-w-3xl rounded-xl bg-white p-8 text-slate-900 shadow-lg sm:p-10"
          >
            <header className="border-b-2 border-slate-900 pb-4">
              <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-1 text-base font-semibold text-blue-700">
                {profile.title}
              </p>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {profile.location} · {profile.email} · {profile.phone}
              </p>
            </header>

            <section className="mt-6">
              <h2 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wider text-slate-800 uppercase">
                Professional Summary
              </h2>
              <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-slate-700">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wider text-slate-800 uppercase">
                Professional Experience
              </h2>
              <div className="mt-3 space-y-4">
                {experience.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {item.position} —{' '}
                        <span className="font-normal text-slate-700">
                          {item.company}
                          {item.location ? ` (${item.location})` : ''}
                        </span>
                      </p>
                      <span className="font-mono text-xs text-slate-600 tabular-nums">
                        {item.duration}
                      </span>
                    </div>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {item.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wider text-slate-800 uppercase">
                Core Competencies
              </h2>
              <div className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                {competencies.map((cat) => (
                  <p key={cat.id}>
                    <strong className="text-slate-900">{cat.title}:</strong>{' '}
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wider text-slate-800 uppercase">
                Education
              </h2>
              <div className="mt-2.5 space-y-2 text-xs sm:text-sm">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex flex-wrap items-baseline justify-between gap-2"
                  >
                    <p className="text-slate-800">
                      <strong className="text-slate-900">
                        {edu.qualification}
                      </strong>{' '}
                      — {edu.institution}
                      {edu.location ? `, ${edu.location}` : ''}
                    </p>
                    <span className="font-mono text-xs text-slate-600 tabular-nums">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wider text-slate-800 uppercase">
                Languages
              </h2>
              <p className="mt-2.5 text-xs text-slate-700 sm:text-sm">
                {languages
                  .map(
                    (lang) =>
                      `${lang.language} (${lang.proficiency}${
                        lang.id === 'german'
                          ? ' – B1 working-level proficiency'
                          : ''
                      })`
                  )
                  .join(' · ')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

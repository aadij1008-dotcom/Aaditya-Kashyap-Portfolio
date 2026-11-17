import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#050810] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {PORTFOLIO_DATA.profile.name}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            {PORTFOLIO_DATA.profile.title} · {PORTFOLIO_DATA.profile.location}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400"
        >
          {PORTFOLIO_DATA.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
        >
          <ArrowUp className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
          <span>Back to Top</span>
        </button>
      </div>

      {/* Floating Scroll-to-Top Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed right-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/35 bg-[#0B1221]/90 text-cyan-300 shadow-lg backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </footer>
  );
}

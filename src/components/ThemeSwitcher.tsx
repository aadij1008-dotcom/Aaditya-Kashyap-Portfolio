import { useEffect, useState } from 'react';

const themes = [
  { id: 'executive', name: 'Executive Navy', description: 'Formal navy with warm gold accents', swatches: ['#101b2c', '#d2ad69', '#e9edf4'] },
  { id: 'minimal', name: 'Modern Minimal', description: 'Light stone, charcoal and cobalt', swatches: ['#f2f4f7', '#315fce', '#222b3a'] },
  { id: 'berlin', name: 'Berlin Tech', description: 'Charcoal with electric blue and cyan', swatches: ['#10151f', '#4387ff', '#38d6e8'] },
  { id: 'forest', name: 'Green Authority', description: 'Deep green, cream and bronze', swatches: ['#10241f', '#d4b77a', '#e9eee5'] },
  { id: 'operations', name: 'Data / Operations', description: 'Slate, emerald and orange highlights', swatches: ['#202936', '#27b887', '#f29b55'] },
] as const;

type ThemeId = (typeof themes)[number]['id'];

export default function ThemeSwitcher() {
  const [selected, setSelected] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      return themes.some((theme) => theme.id === saved) ? (saved as ThemeId) : 'executive';
    } catch {
      return 'executive';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = selected;
    try { localStorage.setItem('portfolio-theme', selected); } catch { /* Storage may be disabled. */ }
  }, [selected]);

  return (
    <section aria-label="Portfolio theme preview" className="theme-switcher border-b px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Choose a look</p>
            <h2 className="mt-1 text-lg font-bold">Theme preview</h2>
          </div>
          <p className="text-xs opacity-70">Select a palette to preview it across the portfolio. Your choice is saved on this device.</p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              aria-pressed={selected === theme.id}
              onClick={() => setSelected(theme.id)}
              className={`theme-option rounded-xl border p-3 text-left transition hover:-translate-y-0.5 ${selected === theme.id ? 'is-selected' : ''}`}
            >
              <span className="mb-2 flex gap-1.5" aria-hidden="true">
                {theme.swatches.map((color) => <span key={color} className="h-4 w-7 rounded-full border border-black/10" style={{ backgroundColor: color }} />)}
              </span>
              <span className="block text-sm font-semibold">{theme.name}</span>
              <span className="mt-0.5 block text-xs opacity-70">{theme.description}</span>
              {selected === theme.id && <span className="mt-2 block text-[11px] font-semibold uppercase tracking-wide">Current preview</span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

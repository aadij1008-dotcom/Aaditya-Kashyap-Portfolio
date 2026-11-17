import { FormEvent, useState } from 'react';
import {
  Check,
  Copy,
  Github,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formNotice, setFormNotice] = useState<{
    type: 'info' | 'error';
    text: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setFormNotice({
        type: 'error',
        text: 'Please fill in your name, email address, subject, and message before continuing.',
      });
      return;
    }

    setFormNotice({
      type: 'info',
      text: 'Direct web form delivery is not active yet because no backend or email integration is configured. Use "Compose in Email App" or "Copy Message Draft" below to send your message directly.',
    });
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(form.subject.trim() || 'Portfolio Inquiry');
    const bodyText = [
      form.name.trim() ? `From: ${form.name.trim()} (${form.email.trim()})` : '',
      '',
      form.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');
    return `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleCopyDraft = async () => {
    const draft = `To: ${PORTFOLIO_DATA.profile.email}\nSubject: ${form.subject || 'Portfolio Inquiry'}\nFrom: ${form.name} (${form.email})\n\n${form.message}`;
    try {
      await navigator.clipboard.writeText(draft);
      setCopiedDraft(true);
      window.setTimeout(() => setCopiedDraft(false), 2200);
    } catch {
      setCopiedDraft(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#070C17] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-cyan-400">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            {PORTFOLIO_DATA.contact.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {PORTFOLIO_DATA.contact.supportingText}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Direct Contact Details & Actions */}
          <div className="space-y-4 lg:col-span-5">
            <div className="glass-surface rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Direct Contact Information
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900 text-cyan-300">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-400">Email</p>
                    <p className="mt-0.5 truncate text-sm font-medium text-slate-100">
                      {PORTFOLIO_DATA.profile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900 text-cyan-300">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Phone</p>
                    <p className="mt-0.5 font-mono text-sm font-medium text-slate-100 tabular-nums">
                      {PORTFOLIO_DATA.profile.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900 text-cyan-300">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Location</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-100">
                      {PORTFOLIO_DATA.profile.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email Me</span>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <span>Call Me</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-3 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                    <span>Email address copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Placeholders Card */}
            <div className="glass-surface rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wider text-slate-400">
                External Profiles
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSocialNotice(
                      'LinkedIn placeholder: profile link has not been provided yet.'
                    )
                  }
                  className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
                >
                  <Linkedin className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <span>LinkedIn (Placeholder)</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSocialNotice(
                      'GitHub placeholder: profile link has not been provided yet.'
                    )
                  }
                  className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
                >
                  <Github className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <span>GitHub (Placeholder)</span>
                </button>
              </div>
              {socialNotice && (
                <p role="status" className="mt-3 text-xs text-cyan-300/90">
                  {socialNotice}
                </p>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              noValidate
              className="glass-surface rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <h3 className="font-display text-lg font-semibold text-white">
                  Send a Message
                </h3>
                <span className="text-xs text-slate-400">
                  Draft &amp; mailto ready
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-2 block w-full min-h-[44px] rounded-lg border border-slate-700/80 bg-[#060A13]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="mt-2 block w-full min-h-[44px] rounded-lg border border-slate-700/80 bg-[#060A13]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Role opportunity, vendor operations inquiry, or networking"
                  className="mt-2 block w-full min-h-[44px] rounded-lg border border-slate-700/80 bg-[#060A13]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share details about the opportunity or how we can collaborate..."
                  className="mt-2 block w-full rounded-lg border border-slate-700/80 bg-[#060A13]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {/* Transparent backend status notice */}
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 text-xs leading-relaxed text-slate-300">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <span>
                  Note: Direct automated form submission is not yet active because
                  no backend or email service integration is configured. You can
                  prepare your message here and open it in your email app or copy
                  the draft.
                </span>
              </div>

              {formNotice && (
                <div
                  role="alert"
                  className={`mt-4 rounded-xl border p-3.5 text-xs leading-relaxed ${
                    formNotice.type === 'error'
                      ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                      : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-100'
                  }`}
                >
                  {formNotice.text}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Prepare Message</span>
                </button>

                <a
                  href={buildMailtoHref()}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
                >
                  <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <span>Compose in Email App</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                      <span>Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

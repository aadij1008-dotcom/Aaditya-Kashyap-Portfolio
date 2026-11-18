import { FormEvent, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const LINKEDIN_URL = 'https://de.linkedin.com/in/aaditya-kashyap-288692146';
const GITHUB_URL = 'https://github.com/aadij1008-dotcom';

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(form.subject.trim() || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `From: ${form.name.trim()} (${form.email.trim()})\n\n${form.message.trim()}`
    );
    return `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoHref();
  };

  return (
    <section id="contact" className="bg-[#070C17] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-cyan-400">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {PORTFOLIO_DATA.contact.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {PORTFOLIO_DATA.contact.supportingText}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="glass-surface rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">Direct Contact Information</h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <Mail className="mt-1 h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-400">Email</p>
                    <a className="mt-0.5 text-sm font-medium text-slate-100 hover:text-cyan-300" href={`mailto:${PORTFOLIO_DATA.profile.email}`}>
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <Phone className="mt-1 h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-400">Phone</p>
                    <a className="mt-0.5 text-sm font-medium text-slate-100 hover:text-cyan-300" href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}>
                      {PORTFOLIO_DATA.profile.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-1 h-4 w-4 text-cyan-300" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-400">Location</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-100">{PORTFOLIO_DATA.profile.location}</p>
                  </div>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500" href={`mailto:${PORTFOLIO_DATA.profile.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email Me
                </a>
                <a className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400" href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}>
                  <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" /> Call Me
                </a>
              </div>
            </div>

            <div className="glass-surface rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wider text-slate-400">External Profiles</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-white">
                  <Linkedin className="h-4 w-4 text-cyan-300" aria-hidden="true" /> LinkedIn
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-white">
                  <Github className="h-4 w-4 text-cyan-300" aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-surface rounded-2xl p-6 sm:p-8">
              <div className="border-b border-slate-800/80 pb-4">
                <h3 className="font-display text-lg font-semibold text-white">Send a Message</h3>
                <p className="mt-1 text-xs text-slate-400">Submitting opens a new message in your email app.</p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="text-xs font-medium text-slate-300" htmlFor="contact-name">Name
                  <input id="contact-name" name="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="mt-2 block min-h-[44px] w-full rounded-lg border border-slate-700 bg-[#060A13] px-3.5 py-2.5 text-sm text-white" />
                </label>
                <label className="text-xs font-medium text-slate-300" htmlFor="contact-email">Email
                  <input id="contact-email" name="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="mt-2 block min-h-[44px] w-full rounded-lg border border-slate-700 bg-[#060A13] px-3.5 py-2.5 text-sm text-white" />
                </label>
              </div>
              <label className="mt-5 block text-xs font-medium text-slate-300" htmlFor="contact-subject">Subject
                <input id="contact-subject" name="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we work together?" className="mt-2 block min-h-[44px] w-full rounded-lg border border-slate-700 bg-[#060A13] px-3.5 py-2.5 text-sm text-white" />
              </label>
              <label className="mt-5 block text-xs font-medium text-slate-300" htmlFor="contact-message">Message
                <textarea id="contact-message" name="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message..." className="mt-2 block w-full rounded-lg border border-slate-700 bg-[#060A13] px-3.5 py-2.5 text-sm text-white" />
              </label>
              <button type="submit" className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
                <Send className="h-4 w-4" aria-hidden="true" /> Compose Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

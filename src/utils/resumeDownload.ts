import { PORTFOLIO_DATA } from '../data/portfolioData';

export function buildResumeHtml(): string {
  const { profile, about, experience, competencies, education, languages } = PORTFOLIO_DATA;

  const experienceHtml = experience
    .map(
      (item) => `
      <div class="entry">
        <div class="entry-head">
          <div>
            <strong>${item.position}</strong> — ${item.company}${item.location ? ` (${item.location})` : ''}
          </div>
          <div class="dates">${item.duration}</div>
        </div>
        <ul>
          ${item.responsibilities.map((r) => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `
    )
    .join('');

  const skillsHtml = competencies
    .map(
      (cat) => `
      <div class="skill-group">
        <strong>${cat.title}:</strong> ${cat.skills.map((s) => s.name).join(' · ')}
      </div>
    `
    )
    .join('');

  const educationHtml = education
    .map(
      (edu) => `
      <div class="entry-head">
        <div><strong>${edu.qualification}</strong> — ${edu.institution}${edu.location ? `, ${edu.location}` : ''}</div>
        <div class="dates">${edu.year}</div>
      </div>
    `
    )
    .join('');

  const languagesHtml = languages
    .map(
      (lang) =>
        `<span><strong>${lang.language}</strong> (${lang.proficiency}${lang.id === 'german' ? ' – B1 working-level proficiency' : ''})</span>`
    )
    .join(' &nbsp;|&nbsp; ');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${profile.name} - Resume</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.5;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 24px;
    }
    header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 14px;
      margin-bottom: 20px;
    }
    h1 {
      margin: 0 0 4px 0;
      font-size: 26px;
      letter-spacing: -0.02em;
    }
    .subtitle {
      font-size: 15px;
      font-weight: 600;
      color: #1d4ed8;
      margin-bottom: 8px;
    }
    .contact-line {
      font-size: 13px;
      color: #334155;
    }
    h2 {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #1e293b;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 4px;
      margin: 22px 0 10px 0;
    }
    p {
      margin: 0 0 8px 0;
      font-size: 13.5px;
      color: #1e293b;
    }
    .entry {
      margin-bottom: 14px;
    }
    .entry-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .dates {
      font-size: 12.5px;
      color: #475569;
      white-space: nowrap;
    }
    ul {
      margin: 4px 0 0 18px;
      padding: 0;
      font-size: 13.5px;
      color: #334155;
    }
    li {
      margin-bottom: 3px;
    }
    .skill-group {
      font-size: 13.5px;
      margin-bottom: 6px;
      color: #1e293b;
    }
    .languages {
      font-size: 13.5px;
      color: #1e293b;
    }
    @media print {
      body {
        margin: 0;
        padding: 12px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>${profile.name}</h1>
    <div class="subtitle">${profile.title}</div>
    <div class="contact-line">
      ${profile.location} &nbsp;·&nbsp; ${profile.email} &nbsp;·&nbsp; ${profile.phone}
    </div>
  </header>

  <section>
    <h2>Professional Summary</h2>
    ${about.paragraphs.map((p) => `<p>${p}</p>`).join('')}
  </section>

  <section>
    <h2>Professional Experience</h2>
    ${experienceHtml}
  </section>

  <section>
    <h2>Core Competencies</h2>
    ${skillsHtml}
  </section>

  <section>
    <h2>Education</h2>
    ${educationHtml}
  </section>

  <section>
    <h2>Languages</h2>
    <div class="languages">${languagesHtml}</div>
  </section>
</body>
</html>`;
}

export function downloadResumeFile(): void {
  const html = buildResumeHtml();
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Aaditya_Kashyap_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

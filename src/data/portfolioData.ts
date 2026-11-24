import heroVisual from '../assets/images/IMG_0636.jpeg';

export interface ExperienceItem { id: string; company: string; monogram: string; position: string; location?: string; duration: string; responsibilities: string[] }
export interface CompetencyCategory { id: string; title: string; description: string; skills: { name: string; iconName: 'Handshake' | 'Layers' | 'ShieldCheck' | 'Workflow' | 'Users' | 'Target' | 'HeartHandshake' | 'BarChart3' | 'Languages' | 'MonitorCog' | 'MailCheck' | 'Database' | 'ShieldAlert' | 'ClipboardCheck' | 'SearchCheck' | 'BadgeCheck' | 'FileCheck2' | 'Gauge' | 'Presentation' | 'MessageSquareText' | 'Phone' | 'UsersRound' }[] }
export interface EducationItem { id: string; qualification: string; institution: string; year: string; location?: string }
export interface LanguageItem { id: string; language: string; proficiency: string; levelNote: string; segmentsFilled: number; totalSegments: number }
export interface ValuePropositionItem { number: string; title: string; description: string }
export interface NavItem { id: string; label: string; href: string }

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Aaditya Kashyap',
    title: 'Supplier Support & Compliance Communications Specialist',
    experienceYears: '9+ Years',
    location: 'Berlin, Germany',
    email: 'aadityakashyap88828@gmail.com',
    phone: '+49 15255629376',
    summaryShort: 'Supplier and vendor support professional with 9+ years of experience in customer operations, compliance-sensitive case management, multilingual communication and operational process improvement.',
    summaryDetailed: 'Experienced in German and English supplier communications, escalation handling, documentation validation, SLA management, CRM operations and cross-functional collaboration.',
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'languages', label: 'Languages', href: '#languages' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ] as NavItem[],
  hero: {
    greeting: "Hello, I'm Aaditya Kashyap",
    headline: 'Supplier Support & Compliance Communications Specialist',
    supportingText: 'Customer operations professional experienced in supplier support, compliance-sensitive case management, German and English communication, SLA management and process improvement across high-volume international environments.',
    highlights: [
      { label: '9+ Years of Professional Experience', detail: 'Supplier support, operations & customer service' },
      { label: 'Compliance & Quality', detail: 'Documentation validation & audit readiness' },
      { label: 'Operations Excellence', detail: '100% SLA compliance & process improvement' },
      { label: 'German & English Communication', detail: 'Multilingual supplier & customer support' },
    ],
    visualAsset: heroVisual,
    socials: [
      { id: 'linkedin', label: 'LinkedIn', statusText: 'https://www.linkedin.com/in/aaditya-kashyap-288692146' },
      { id: 'github', label: 'GitHub', statusText: 'https://github.com/aadij1008-dotcom' },
    ],
  },
  about: {
    paragraphs: [
      'I am an operations and customer communications professional with 9+ years of experience in supplier and vendor support, customer operations and compliance-sensitive case management for Amazon and other international organizations.',
      'My experience includes escalation handling, documentation validation, SLA management and multi-channel communication by email, chat and phone in German and English.',
      'I have a proven record of 100% SLA compliance, peer mentoring and process improvement. I am based in Berlin and seeking supplier support, vendor operations or customer operations roles.',
    ],
    highlights: [
      { title: 'Supplier & Stakeholder Support', description: 'Managing non-responsive contact follow-ups, operational cases and bilingual German and English communications.' },
      { title: 'Compliance & Quality', description: 'Validating documentation and data, maintaining accurate records and supporting audit readiness.' },
      { title: 'Operational Communication', description: 'Resolving escalations and coordinating across internal teams and external contributors.' },
    ],
  },
  experience: [
    { id: 'bb-hotel', company: 'B&B Hotels Dreilinden', monogram: 'BB', position: 'Receptionist (Part-Time)', location: 'Berlin, Germany', duration: 'March 2026 – Present', responsibilities: ['Support front-desk operations, guest communication and accurate reservation handling.'] },
    { id: 'amazon-mentor', company: 'Amazon India', monogram: 'AMZ', position: 'Operations & Vendor Associate Mentor', location: 'India', duration: 'August 2023 – December 2025', responsibilities: ['Mentored associates and supported vendor operations, SLA compliance and quality monitoring.'] },
    { id: 'amazon-translation', company: 'Amazon India', monogram: 'AMZ', position: 'Translation & Operations Associate II', location: 'India', duration: 'September 2022 – August 2023', responsibilities: ['Handled German and English translations and operational support.'] },
    { id: 'concentrix', company: 'Concentrix – Amazon.de Project', monogram: 'CNX', position: 'Senior Operations Representative', location: 'India', duration: 'August 2019 – September 2022', responsibilities: ['Managed German-speaking supplier and customer communications and escalations.'] },
    { id: 'savi-impex', company: 'Savi Impex', monogram: 'SI', position: 'Export Operations Executive', location: 'India', duration: 'December 2014 – August 2018', responsibilities: ['Managed export documentation, customer coordination and logistics.'] },
  ] as ExperienceItem[],
  competencies: [
    { id: 'operations', title: 'Operations & Support', description: 'Supplier support, customer operations and structured case management.', skills: [{name:'Supplier Support',iconName:'Handshake'}] },
    { id: 'compliance', title: 'Compliance & Quality', description: 'Compliance documentation, quality assurance and audit readiness.', skills: [{name:'Compliance Documentation',iconName:'ShieldCheck'}] },
    { id: 'communication', title: 'Communication & Tools', description: 'Multilingual stakeholder communication and operational tools.', skills: [{name:'Stakeholder Management',iconName:'HeartHandshake'}] },
  ] as CompetencyCategory[],
  education: [
    { id: 'du-banking', qualification: 'Bachelor of Arts (Banking)', institution: 'Delhi University', year: '2011 – 2017', location: 'India' },
    { id: 'aiilsg-healthcare', qualification: 'Diploma in Health Care Administration', institution: 'AIILSG', year: '2016 – 2017', location: 'India' },
  ] as EducationItem[],
  languages: [
    { id: 'english', language: 'English', proficiency: 'B2', levelNote: 'Upper-intermediate professional communication', segmentsFilled: 4, totalSegments: 5 },
    { id: 'german', language: 'German', proficiency: 'B1', levelNote: 'Intermediate professional communication', segmentsFilled: 3, totalSegments: 5 },
    { id: 'hindi', language: 'Hindi', proficiency: 'Native', levelNote: 'Native-level fluency', segmentsFilled: 5, totalSegments: 5 },
  ] as LanguageItem[],
  valuePropositions: [
    { number: '01', title: 'Supplier Operations', description: 'Experience managing supplier follow-ups, case resolution and stakeholder communication.' },
    { number: '02', title: 'Compliance Discipline', description: 'Documentation validation, process adherence and audit-ready records.' },
    { number: '03', title: 'SLA Reliability', description: 'Maintained 100% SLA compliance in operational support.' },
    { number: '04', title: 'Process Improvement', description: 'Identified bottlenecks and contributed to workflow improvements.' },
    { number: '05', title: 'Bilingual Communication', description: 'Professional support in German and English.' },
    { number: '06', title: 'Customer Experience', description: 'Solution-oriented support across phone, email and live chat.' },
  ] as ValuePropositionItem[],
  certifications: [
    { name: 'Generative AI Foundations', year: '2025' },
    { name: 'Amazon Andon Champion', year: '2022', detail: 'Operational excellence recognition for process improvement and quality leadership' },
  ],
  contact: {
    headline: "Let's Connect and Create Operational Excellence",
    supportingText: 'Open to supplier support, vendor operations and customer operations roles in Berlin and beyond.',
  },
};

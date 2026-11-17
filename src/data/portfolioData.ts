import heroVisual from '../assets/images/operations_architecture_abstract_1794902575288.jpg';

export interface ExperienceItem {
  id: string;
  company: string;
  monogram: string;
  position: string;
  location?: string;
  duration: string;
  responsibilities: string[];
}

export interface CompetencyCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    iconName:
      | 'Handshake'
      | 'Layers'
      | 'ShieldCheck'
      | 'Workflow'
      | 'Users'
      | 'Target'
      | 'HeartHandshake'
      | 'Headset'
      | 'Ticket'
      | 'AlertCircle'
      | 'MessageSquare'
      | 'FileSpreadsheet'
      | 'Cpu';
  }[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  year: string;
  location?: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency: string;
  levelNote: string;
  segmentsFilled: number;
  totalSegments: number;
}

export interface ValuePropositionItem {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Aaditya Kashyap',
    title: 'Operations & Vendor Management Professional',
    experienceYears: '9+ Years',
    location: 'Berlin, Germany',
    email: 'aadityakashyap88828@gmail.com',
    phone: '+49 15255629376',
    summaryShort:
      'Operations and customer support expert with over 9 years of experience in vendor management, catalog operations, multilingual service, and international logistics.',
    summaryDetailed:
      'Experienced in German and English vendor communications, SLA compliance, mentoring vendor associates, export documentation, and operational process improvement.',
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
    headline: 'Operations & Vendor Management Professional',
    supportingText:
      'Driving operational excellence through vendor management, multilingual communication, customer experience, and process improvement.',
    highlights: [
      {
        label: '9+ Years of Professional Experience',
        detail: 'Cross-functional operations & support',
      },
      {
        label: 'Vendor Management',
        detail: 'Catalog accuracy & account resolution',
      },
      {
        label: 'Operations Excellence',
        detail: 'SLA adherence & workflow improvement',
      },
      {
        label: 'German & English Communication',
        detail: 'Bilingual vendor & client support',
      },
    ],
    visualAsset: heroVisual,
    socials: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        statusText: 'Profile URL not yet supplied',
      },
      {
        id: 'github',
        label: 'GitHub',
        statusText: 'Profile URL not yet supplied',
      },
    ],
  },
  about: {
    paragraphs: [
      'I am an experienced Operations and Customer Support professional with over 9 years of experience across vendor management, catalog operations, customer service, and international logistics.',
      'During my professional journey at Amazon and Concentrix, I have developed expertise in vendor communications, SLA compliance, mentoring, catalog accuracy, escalation handling, and workflow optimization.',
      'I have worked with international stakeholders and supported German and English-speaking vendors and customers.',
      'I am passionate about operational excellence, process development, stakeholder communication, and delivering quality-driven results.',
    ],
    highlights: [
      {
        title: 'Vendor & Stakeholder Management',
        description:
          'Managing bilingual German and English vendor communications, resolving payment and catalog queries, and aligning cross-functional teams.',
      },
      {
        title: 'Operational Excellence',
        description:
          'Maintaining SLA and quality standards, optimizing workflows, and mentoring new associates to improve onboarding efficiency and accuracy.',
      },
      {
        title: 'Multilingual Customer Experience',
        description:
          'Delivering high-standard German and English customer support, handling complex escalations, and coordinating international shipments.',
      },
    ],
  },
  experience: [
    {
      id: 'amazon-mentor',
      company: 'Amazon India',
      monogram: 'AMZ',
      position: 'Vendor Associate Mentor',
      duration: 'August 2023 – December 2025',
      responsibilities: [
        'Mentored new Vendor Associates.',
        'Improved onboarding efficiency and process accuracy.',
        'Managed bilingual German and English vendor communications.',
        'Resolved catalog and account issues.',
        'Ensured 100% adherence to SLA and quality standards in vendor support operations.',
      ],
    },
    {
      id: 'amazon-translation',
      company: 'Amazon India',
      monogram: 'AMZ',
      position: 'Translation Associate II',
      duration: 'September 2022 – August 2023',
      responsibilities: [
        'Maintained catalog data accuracy.',
        'Handled multilingual vendor communications.',
        'Resolved payment and account-related issues through cross-team collaboration.',
        'Contributed to workflow optimization initiatives to improve response efficiency.',
      ],
    },
    {
      id: 'concentrix',
      company: 'Concentrix – Amazon.de Project',
      monogram: 'CNX',
      position: 'Senior Customer Service Representative',
      location: 'Gurgaon',
      duration: 'August 2019 – September 2022',
      responsibilities: [
        'Delivered bilingual German and English customer support.',
        'Achieved top customer satisfaction scores.',
        'Mentored new team members on orders, returns, and complex account queries.',
        'Coordinated international logistics to ensure timely shipment processing.',
      ],
    },
    {
      id: 'savi-impex',
      company: 'Savi Impex',
      monogram: 'SI',
      position: 'Export Operations Executive',
      location: 'Delhi',
      duration: 'December 2014 – August 2018',
      responsibilities: [
        'Managed export documentation.',
        'Coordinated international shipments.',
        'Supported international logistics and timely shipment processing.',
      ],
    },
  ] as ExperienceItem[],
  competencies: [
    {
      id: 'vendor-ops',
      title: 'Vendor and Operations Management',
      description:
        'Core capabilities in operational governance, vendor lifecycle coordination, SLA discipline, and team onboarding.',
      skills: [
        { name: 'Vendor Management', iconName: 'Handshake' },
        { name: 'Operations Management', iconName: 'Layers' },
        { name: 'SLA Compliance', iconName: 'ShieldCheck' },
        { name: 'Process Development', iconName: 'Workflow' },
        { name: 'Team Mentoring', iconName: 'Users' },
        { name: 'Result Orientation', iconName: 'Target' },
      ],
    },
    {
      id: 'customer-cx',
      title: 'Customer Experience',
      description:
        'Structured service delivery across ticketing workflows, complex escalations, and international stakeholder correspondence.',
      skills: [
        { name: 'Customer Relationship Management', iconName: 'HeartHandshake' },
        { name: 'Customer Support', iconName: 'Headset' },
        { name: 'Ticketing Systems', iconName: 'Ticket' },
        { name: 'Escalation Handling', iconName: 'AlertCircle' },
        { name: 'Stakeholder Communications', iconName: 'MessageSquare' },
      ],
    },
    {
      id: 'business-tools',
      title: 'Business and Administrative Tools',
      description:
        'Everyday administrative productivity and modern AI-assisted operational workflows.',
      skills: [
        { name: 'MS Office Suite', iconName: 'FileSpreadsheet' },
        { name: 'Artificial Intelligence', iconName: 'Cpu' },
      ],
    },
  ] as CompetencyCategory[],
  education: [
    {
      id: 'du-banking',
      qualification: 'Bachelor of Arts (Banking)',
      institution: 'Delhi University',
      year: '2017',
      location: 'Delhi',
    },
    {
      id: 'aiilsg-healthcare',
      qualification: 'Diploma in Health Care Administration',
      institution: 'AIILSG',
      year: '2017',
    },
  ] as EducationItem[],
  languages: [
    {
      id: 'english',
      language: 'English',
      proficiency: 'Advanced',
      levelNote: 'Professional vendor, stakeholder, and operational communication',
      segmentsFilled: 4,
      totalSegments: 5,
    },
    {
      id: 'german',
      language: 'German',
      proficiency: 'Intermediate',
      levelNote: 'B1 working-level proficiency',
      segmentsFilled: 3,
      totalSegments: 5,
    },
    {
      id: 'hindi',
      language: 'Hindi',
      proficiency: 'Expert',
      levelNote: 'Native-level fluency across spoken and written communication',
      segmentsFilled: 5,
      totalSegments: 5,
    },
  ] as LanguageItem[],
  valuePropositions: [
    {
      number: '01',
      title: 'Operational Reliability',
      description: 'Experience maintaining SLA and quality standards.',
    },
    {
      number: '02',
      title: 'Vendor Communication',
      description: 'Experience communicating with German and English-speaking vendors.',
    },
    {
      number: '03',
      title: 'Team Development',
      description: 'Experience mentoring and onboarding new Vendor Associates.',
    },
    {
      number: '04',
      title: 'Process Improvement',
      description: 'Experience contributing to workflow optimization and operational accuracy.',
    },
    {
      number: '05',
      title: 'International Operations',
      description: 'Experience in export documentation and international logistics.',
    },
    {
      number: '06',
      title: 'Customer Experience',
      description: 'Experience supporting customers and resolving complex account issues.',
    },
  ] as ValuePropositionItem[],
  contact: {
    headline: "Let's Connect and Create Operational Excellence",
    supportingText:
      'Open to professional networking, suitable career opportunities, and collaborations in vendor management, operations, customer experience, and international business support.',
  },
};

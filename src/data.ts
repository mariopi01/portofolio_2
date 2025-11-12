// Import semua gambar aset
import skillHtml from './assets/skill_html.png';
import skillCss from './assets/skill_css.png';
import skillJs from './assets/skill_js.png';
import skillReact from './assets/skill_react.png';
import skillMongo from './assets/skill_mongo.png';
import skillDocker from './assets/skill_docker.png';
import skillExpress from './assets/skill_express.png';
import skillPostgres from './assets/skill_postgres.png';

import portfolio1 from './assets/portfolio_1.jpg';
import portfolio2 from './assets/portfolio_2.jpg';
import portfolio3 from './assets/portfolio_3.jpg';

import workAdobe from './assets/work_adobe.jpg';
import workDribbble from './assets/work_dribbble.jpg';
import workDropbox from './assets/work_dropbox.jpg';
import workPaypal from './assets/work_paypal.jpg';


import logoAdobe from './assets/adobe_logo.png';
import logoDribbble from './assets/dribble_logo.png';
import logoDropbox from './assets/dropbox_logo.png';
import logoPaypal from './assets/paypal_logo.png';

import techCss from './assets/tech_css.png';
import techJs from './assets/tech_js.png';
import techTs from './assets/tech_ts.png';
import techHtml from './assets/tech_html.png';
import techReact from './assets/tech_react.png';

import superiorityAvatar from './assets/superiority_avatar.png';
import testimonialAvatar from './assets/testimonial_avatar.png';
import aboutAvatar from './assets/about_avatar.png';
import aboutDeveloper from './assets/about_developer.jpg';
import aboutPatternBg from './assets/about_pattern_bg.png';
import aboutPortfolioPreview from './assets/about_portfolio_preview.png';
import headerAvatar from './assets/header_avatar.png';
import heroBg from './assets/hero_bg.jpg';
import heroDeveloper from './assets/hero_developer.png';
import contactAvatar from './assets/contact_avatar.png';



import testimonialAvatar1 from './assets/testimonial_avatar.png';
import testimonialAvatar2 from './assets/testimonial_avatar2.png';
import testimonialAvatar3 from './assets/testimonial_avatar3.png';
import testimonialAvatar4 from './assets/testimonial_avatar4.png';

// Ekspor gambar individu untuk komponen
export const ImageAssets = {
  headerAvatar,
  heroBg,
  heroDeveloper,
  aboutPatternBg,
  aboutAvatar,
  aboutDeveloper,
  aboutPortfolioPreview,
  superiorityAvatar,
  testimonialAvatar,
  contactAvatar
};

// --- Interfaces ---
export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface PortfolioItem {
  title: string;
  image: string;
}

export interface WorkExperience {
  company: string;
  logo: string;
  date: string;
  image: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface SuperiorityItem {
  text: string;
  isPositive: boolean;
}


export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

// --- Data Arrays ---

export const testimonials: Testimonial[] = [
  {
    quote: "Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.",
    name: "Sarah Lim",
    role: "Product Manager at Loopware",
    avatar: testimonialAvatar1 // Gunakan ImageAssets.testimonialAvatar jika sudah di-export
  },
  {
    quote: "Working with Edwin was a game-changer for our product launch. His attention to detail is unmatched.",
    name: "Mark Johnson",
    role: "CTO at TechStart",
    avatar: testimonialAvatar2 // Ganti dengan avatar lain jika ada
  },
  {
    quote: "Highly recommended! He transformed our outdated designs into a modern, responsive web application perfectly.",
    name: "Emily Chen",
    role: "Design Lead at CreativeX",
    avatar: testimonialAvatar3 // Ganti dengan avatar lain jika ada
  },
  {
    quote: "Professional, communicative, and incredibly skilled. He solved complex UI challenges with elegant solutions.",
    name: "David Park",
    role: "Founder of DevScale",
    avatar: testimonialAvatar4 // Ganti dengan avatar lain jika ada
  }
];




export const skills: Skill[] = [
  { name: 'HTML', percentage: 90, icon: skillHtml },
  { name: 'CSS', percentage: 90, icon: skillCss },
  { name: 'Javascript', percentage: 90, icon: skillJs },
  { name: 'React JS', percentage: 90, icon: skillReact },
  { name: 'Mongo DB', percentage: 90, icon: skillMongo },
  { name: 'Docker', percentage: 90, icon: skillDocker },
  { name: 'Express JS', percentage: 90, icon: skillExpress },
  { name: 'PostgreSQL', percentage: 90, icon: skillPostgres }
];

export const portfolioItems: PortfolioItem[] = [
  { title: 'Portofolio 1', image: portfolio1 },
  { title: 'Portofolio 2', image: portfolio2 },
  { title: 'Portofolio 3', image: portfolio3 }
];

export const workExperience: WorkExperience[] = [
  { company: 'Adobe', logo: logoAdobe, date: '2025 - Present', image: workAdobe },
  { company: 'Dribbble', logo: logoDribbble , date: '2025 - Present', image: workDribbble },
  { company: 'Dropbox', logo: logoDropbox, date: '2025 - Present', image: workDropbox },
  { company: 'PayPal', logo: logoPaypal, date: '2025 - Present', image: workPaypal }
];

export const faqs: Faq[] = [
  {
    question: 'What technologies do you work with?',
    answer: 'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.'
  },
  {
    question: 'Do you work on freelance or remote projects?',
    answer: 'Yes, I am available for both freelance and remote projects.'
  },
  {
    question: 'Can you convert Figma or Sketch designs into code?',
    answer: 'Absolutely! I specialize in converting designs into pixel-perfect, responsive code.'
  },
  {
    question: 'Do you collaborate with backend developers or teams?',
    answer: 'Yes, I work seamlessly with backend developers and cross-functional teams.'
  },
  {
    question: 'Are you available for full-time roles?',
    answer: 'I am open to discussing full-time opportunities that align with my skills and interests.'
  }
];

export const technologies: Technology[] = [
  { name: 'CSS', icon: techCss },
  { name: 'JavaScript', icon: techJs },
  { name: 'TypeScript', icon: techTs },
  { name: 'HTML', icon: techHtml },
  { name: 'React', icon: techReact }
];

export const mySuperiority: string[] = [
  'React Expert',
  'Precise Website Implementation',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Responsive Website Development',
  'UI Design Proficiency (Figma)'
];

export const otherSuperiority: string[] = [
  'Basic React Knowledge',
  'Inconsistent Design Translation',
  'Little to No TypeScript Knowledge',
  'Unstructured Code',
  'Inconsistent Responsiveness',
  'No Design Skills'
];
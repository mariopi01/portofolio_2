import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsetSection from './components/SkillsetSection';
import SuperioritySection from './components/SuperioritySection';
import PortfolioSection from './components/PortfolioSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import {
  skills,
  portfolioItems,
  workExperience,
  faqs,
  technologies,
  mySuperiority,
  otherSuperiority
} from './data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Header />
      <main>
        <HeroSection />
        <AboutSection technologies={technologies} />
        <SkillsetSection skills={skills} />
        <SuperioritySection myItems={mySuperiority} otherItems={otherSuperiority} />
        <PortfolioSection portfolioItems={portfolioItems} />
        <WorkExperienceSection workExperience={workExperience} />
        <TestimonialSection />
        <FAQSection faqs={faqs} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
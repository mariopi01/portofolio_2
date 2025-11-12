import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { type Technology, ImageAssets } from '../data';


interface AboutSectionProps {
  technologies: Technology[];
}

// 2. Buat objek untuk memetakan string ke komponen Ikon
const socialIcons = {
  facebook: <FaFacebookF className="w-5 h-5 text-white" />,
  instagram: <FaInstagram className="w-5 h-5 text-white" />,
  linkedin: <FaLinkedinIn className="w-5 h-5 text-white" />,
  tiktok: <FaTiktok className="w-5 h-5 text-white" />
};

// Tentukan tipe untuk key
type SocialKey = keyof typeof socialIcons;

const AboutSection: React.FC<AboutSectionProps> = ({ technologies }) => {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            The Developer Behind the Pixel
          </h2>
        </div>

        {/* Developer Card */}
        <div className="mb-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src={ImageAssets.aboutPatternBg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                  <img
                    src={ImageAssets.aboutAvatar}
                    alt="Edwin Anderson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold">Edwin Anderson</h3>
                  <p className="text-white text-sm font-semibold">edwinanderson@email.com</p>
                </div>
              </div>
              <div className="flex gap-3 mb-6">
              {(Object.keys(socialIcons) as SocialKey[]).map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-blue-600 border border-gray-300 flex items-center justify-center">
                  {/* Ganti div placeholder dengan ikon yang sebenarnya */}
                  {socialIcons[social]}
                </div>
              ))}
            </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Pushing boundaries through innovation
              </h3>
              <p className="text-white text-sm">
                I create frontend solutions that not only look good but also load fast, work everywhere, and scale well.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mb-6">
          <img
            src={ImageAssets.aboutDeveloper}
            alt="Developer"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Portfolio Preview Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 p-6 mb-6 overflow-hidden min-h-[400px] md:min-h-[457px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-pink-600/50 to-blue-600/50"></div>
          <div className="relative z-10 flex items-start justify-between mb-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Check My Portfolio</h3>
              <p className="text-white">Explore selected works and real-world projects</p>
            </div>
            <button className="p-2 rounded-full border border-white/10">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="relative z-10 mt-auto pt-32">
            <img
              src={ImageAssets.aboutPortfolioPreview}
              alt="Portfolio"
              className="w-full max-w-xs mx-auto rounded-lg"
            />
          </div>
        </div>

        {/* Technologies Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-yellow-400 to-orange-600 p-6 mb-6 overflow-hidden min-h-[349px]">
          <div className="absolute left-0 top-16 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-x-1/3"></div>
          <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center p-2"
                style={{
                  marginTop: idx === 0 ? '60px' : idx === 1 || idx === 3 ? '20px' : '0px'
                }}
              >
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <h3 className="text-gray-900 text-2xl md:text-3xl font-bold text-center">
            Built with 10+ Trusted Technologies
          </h3>
        </div>

        {/* Message Button */}
        <button className="w-full bg-primary text-white font-bold py-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0007 8H8.00065C6.52789 8 5.33398 9.19391 5.33398 10.6667V21.3333C5.33398 22.8061 6.52789 24 8.00065 24H24.0007C25.4734 24 26.6673 22.8061 26.6673 21.3333V10.6667C26.6673 9.19391 25.4734 8 24.0007 8Z" stroke="currentColor" strokeWidth="1.33333" />
            <path d="M14.8087 16.7373L5.33398 12V21.3333C5.33398 22.0406 5.61494 22.7189 6.11503 23.219C6.61513 23.719 7.29341 24 8.00065 24H24.0007C24.7079 24 25.3862 23.719 25.8863 23.219C26.3864 22.7189 26.6673 22.0406 26.6673 21.3333V12L17.1927 16.7373C16.8225 16.9223 16.4144 17.0186 16.0007 17.0186C15.5869 17.0186 15.1788 16.9223 14.8087 16.7373Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
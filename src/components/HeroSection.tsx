import React from 'react';
import { ImageAssets } from '../data';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center">
      {/* Background Image */}
      <div className="absolute  inset-0">
        <img
          src={ImageAssets.heroBg}
          alt=""
          className="w-full h-full object-fill opacity-50"
        />
      </div>

      {/* Konten dipindahkan dari Header agar Hero mengontrol layout-nya */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20"> {/* Tambah pt-24 untuk ruang header */}
        <div className="max-w-md mx-auto md:max-w-2xl">
          <div className="mb-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
              <span className="text-gray-900 bg-yellow-500">Crafting</span> Interfaces, One Line at a Time
            </h1>
            <p className="text-white text-base md:text-lg font-semibold mb-6">
              Build fast, accessible, and responsive web experiences that users love.
            </p>
          </div>
          <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
            Say Hello
          </button>
        </div>

        {/* Developer Image */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src={ImageAssets.heroDeveloper}
              alt="Developer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 393 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M196.407 0C394.902 5.10077e-05 555.813 38.2797 555.813 85.5C555.813 132.72 394.902 171 196.407 171C-2.08768 171 -163 132.72 -163 85.5C-163 38.2796 -2.08759 0 196.407 0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
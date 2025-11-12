import React from 'react';
import { Menu } from 'lucide-react';
import { ImageAssets } from '../data';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
          <img
            src={ImageAssets.headerAvatar}
            alt="Edwin"
            className="w-11 h-11 object-cover"
          />
        </div>
        <span className="text-white text-xl font-bold">Edwin</span>
      </div>
      <button className="text-white p-2" aria-label="Menu">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;
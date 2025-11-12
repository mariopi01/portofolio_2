import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-[#0A0D12] border-t border-gray-800">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Edwin Anderson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
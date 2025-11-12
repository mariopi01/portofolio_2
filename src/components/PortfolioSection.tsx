// import React, {useState} from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { PortfolioItem } from '../data';

// interface PortfolioSectionProps {
//   portfolioItems: PortfolioItem[];
// }

// const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioItems }) => {
//   return (
//     <section className="py-12 md:py-16 px-4 bg-white">
//       <div className="container mx-auto max-w-md md:max-w-4xl">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
//             <span className="text-sm font-bold text-gray-900">Portfolio</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
//             Built with Passion, Shipped with Precision
//           </h2>
//         </div>

//          <div className="flex flex-col md:flex-row gap-6 mb-6">
//           {portfolioItems.map((item, idx) => (
//             <div key={idx} className="relative rounded-2xl overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full aspect-square object-cover rounded-lg"
//               />
//               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-full px-6 py-2">
//                 <span className="text-white font-bold">{item.title}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-3">
//           <button className="p-2 rounded-full border border-gray-300">
//             <ChevronLeft className="w-6 h-6 text-gray-900" />
//           </button>
//           <button className="p-2 rounded-full border border-gray-300">
//             <ChevronRight className="w-6 h-6 text-gray-900" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

import React, { useState } from 'react'; // 1. Impor useState
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type PortfolioItem } from '../data';

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioItems }) => {
  // 2. Buat state untuk menyimpan urutan item
  //    Inisialisasi dengan prop yang diterima
  const [currentItems, setCurrentItems] = useState(portfolioItems);

  // 3. Buat fungsi untuk memutar ke item berikutnya (rotasi ke kiri)
  const handleNext = () => {
    setCurrentItems(prevItems => {
      const items = [...prevItems];    // Buat salinan array
      const firstItem = items.shift(); // Ambil item pertama
      if (firstItem) {
        items.push(firstItem);       // Pindahkan ke akhir array
      }
      return items;
    });
  };

  // 4. Buat fungsi untuk memutar ke item sebelumnya (rotasi ke kanan)
  const handlePrev = () => {
    setCurrentItems(prevItems => {
      const items = [...prevItems];   // Buat salinan array
      const lastItem = items.pop();   // Ambil item terakhir
      if (lastItem) {
        items.unshift(lastItem);    // Pindahkan ke awal array
      }
      return items;
    });
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Built with Passion, Shipped with Precision
          </h2>
        </div>

        {/* 5. Ganti 'portfolioItems.map' menjadi 'currentItems.map' */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {currentItems.map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden md:w-1/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-full px-6 py-2">
                <span className="text-white font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {/* 6. Tambahkan onClick handler ke tombol */}
          <button onClick={handlePrev} className="p-2 rounded-full border border-gray-300">
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button onClick={handleNext} className="p-2 rounded-full border border-gray-300">
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

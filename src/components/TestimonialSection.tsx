
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials, type Testimonial } from '../data'; // Pastikan 'Testimonial' di-export dari data.ts
import { motion, AnimatePresence } from 'framer-motion';

// 1. Buat sub-komponen Kartu agar mudah digunakan kembali
const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div className="relative pt-10 pb-10 px-3">
    <div className="bg-white shadow-[0px_1px_16px_1px_#0000001A] rounded-[16px] w-[364px] mx-auto h-[286px] pt-[60px] px-[16px] pb-[16px] md:mx-0 md:w-[364px] md:h-[377px] md:pt-[60px] md:px-[20px] md:pb-[20px]">
            
      {/* Avatar */}
      <div className="absolute -top-0 left-8 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-gray-900 font-semibold text-left text-lg italic">
          "{item.quote}"
        </p>

        <div className="text-left pt-2">
          <p className="text-base font-bold text-gray-900">— {item.name}</p>
          <p className="text-sm font-medium text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  </div>
);


const TestimonialSection: React.FC = () => {
  // State terpisah untuk mobile (menampilkan 1) dan desktop (menggeser 3)
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const totalItems = testimonials.length; // 4
  const desktopItemsToShow = 3;
  // Indeks maks desktop adalah 1 (halaman 0: kartu 0,1,2; halaman 1: kartu 1,2,3)
  const maxDesktopIndex = totalItems - desktopItemsToShow; // 4 - 3 = 1

  // --- Navigasi Mobile ---
  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % totalItems);
  };
  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // --- Navigasi Desktop ---
  const handleDesktopNext = () => {
    setDesktopIndex((prev) => Math.min(prev + 1, maxDesktopIndex));
  };
  const handleDesktopPrev = () => {
    setDesktopIndex((prev) => Math.max(prev - 1, 0));
  };

  // Varian animasi untuk mobile
  const mobileVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      {/* Container diperlebar di desktop untuk 3 kartu */}
      <div className="container mx-auto max-w-md md:max-w-6xl">

        {/* --- Header (Judul + Tombol Desktop) --- */}
        <div className="flex justify-between items-start mb-8 md:mb-16">
          {/* Judul */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
              <span className="text-sm font-bold text-gray-900">Testimony</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
              Built with Trust & Collaboration
            </h2>
          </div>

          {/* Tombol Navigasi Desktop (Hanya muncul di 'md' ke atas) */}
          <div className="hidden md:flex justify-center gap-3 mt-4">
            <button 
              onClick={handleDesktopPrev} 
              disabled={desktopIndex === 0}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button 
              onClick={handleDesktopNext}
              disabled={desktopIndex === maxDesktopIndex}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>

        {/* --- Tampilan Mobile (Hanya 1 Kartu, disembunyikan di 'md') --- */}
        <div className="md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileIndex}
              variants={mobileVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            >
              <TestimonialCard item={testimonials[mobileIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Tampilan Desktop (Slider 3 Kartu, disembunyikan di mobile) --- */}
        <div className="hidden md:block overflow-hidden">
          <motion.div
            className="flex"
            // Menggeser kontainer flex berdasarkan 'desktopIndex'
            // Setiap geseran adalah 1/3 dari lebar kontainer (karena kita menampilkan 3 kartu)
            animate={{ x: `-${desktopIndex * (100 / desktopItemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((item, idx) => (
              // Setiap kartu memiliki lebar 1/3 dan tidak menyusut (flex-none)
              // Padding-right (pr-6) memberi jarak antar kartu
              <div key={idx} className="w-1/3 flex-none pr-6">
                <TestimonialCard item={item} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tombol Navigasi Mobile (Hanya muncul di mobile) */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button 
            onClick={handleMobilePrev} 
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button 
            onClick={handleMobileNext} 
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;

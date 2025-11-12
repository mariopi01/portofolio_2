// import React from 'react';
// import { ImageAssets } from '../data';

// const ContactSection: React.FC = () => {
//   return (
//     <section className="py-12 md:py-16 px-4 bg-gray-900 text-white">
//       <div className="container mx-auto max-w-md md:max-w-4xl">
//         {/* Profile */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center overflow-hidden">
//             <img
//               src={ImageAssets.contactAvatar}
//               alt="Edwin Anderson"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h3 className="font-bold">Edwin Anderson</h3>
//             <p className="text-sm font-semibold">edwinanderson@email.com</p>
//           </div>
//         </div>

//         <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//           Great results begin with clear ideas.
//         </h2>

//         {/* Social Icons */}
//         <div className="flex gap-3 mb-6">
//           {['facebook', 'instagram', 'linkedin', 'tiktok'].map((social) => (
//             <div key={social} className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center">
//               <div className="w-5 h-5 bg-white/20 rounded-full"></div>
//             </div>
//           ))}
//         </div>

//         <div className="h-px bg-gray-800 my-6"></div>

//         {/* Contact Form */}
//         <div className="space-y-4">
//           <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 mb-3">
//             <span className="text-sm font-bold">Contact</span>
//           </div>
//           <h3 className="text-3xl font-display font-bold mb-6">Start Your Next Project</h3>

//           <form>
//             <div>
//               <label className="text-sm font-bold mb-1 block" htmlFor="name">
//                 Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 placeholder="What should I call you?..."
//                 className="w-full bg-transparent border-b border-gray-800 py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-bold mb-1 block" htmlFor="email">
//                 Email<span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Where can I reach you? ..."
//                 className="w-full bg-transparent border-b border-gray-800 py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-bold mb-1 block" htmlFor="message">
//                 Message<span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 placeholder="Tell me about your project or just say hi :) ..."
//                 rows={3}
//                 className="w-full bg-transparent border-b border-gray-800 py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600 resize-none"
//               ></textarea>
//             </div>

//             <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from 'react';
import { ImageAssets } from '../data';
// 1. Impor ikon-ikon sosial
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import EllipseSubtract from '../assets/ellipse_substract.png';

const ContactSection: React.FC = () => {
  return (
    // 1. Tambahkan 'relative' dan 'overflow-hidden' ke <section> utama
    <section className="py-12 md:py-16 px-4 bg-[#0A0D12] text-white relative ">

      {/* 2. Tambahkan Elips Dekoratif */}
      
      {/* KODE LAMA ANDA (DIV ELIPS) DIHAPUS:
          <div className="absolute w-[2262px] h-[538px] top-[-250px] left-[-411px] bg-[#4D3589] opacity-10 rounded-3xl overflow-visible z-0" />
      */}

      {/* KODE BARU (IMG ELIPS) MENGGUNAKAN IMPORT ANDA: */}
       <img
        src={EllipseSubtract}
        alt=""
        className="absolute w-screen h-auto md:top-[-150px]  top-[-50px] mx-auto z-0 left-1/2 -translate-x-1/2"
      />

      {/* 3. Tambahkan 'relative z-10' ke container utama agar berada DI ATAS elips */}
      <div className="container mx-auto max-w-md md:max-w-4xl relative z-10">
        
        {/* Container Flex Utama
        */}
        <div className="flex flex-col md:flex-row md:gap-16">

          {/* --- Kolom Kiri (Profile, Judul, Ikon Sosial) --- */}
          <div className="md:flex-1">
            {/* Profile */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src={ImageAssets.contactAvatar}
                  alt="Edwin Anderson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Edwin Anderson</h3>
                <p className="text-sm font-semibold">edwinanderson@email.com</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Great results begin with clear ideas.
            </h2>

            {/* Social Icons (Diperbarui dengan ikon asli) */}
            <div className="flex gap-3 mb-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                {/* Placeholder Ikon TikTok (karena tidak ada di Lucide) */}
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Garis Pembatas (Mobile)
          */}
          <div className="h-px bg-gray-800 md:hidden my-6"></div>

          {/* --- Kolom Kanan (Formulir Kontak) --- */}
          <div className="md:flex-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 mb-3">
                <span className="text-sm font-bold">Contact</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Start Your Next Project</h3>

              <form>
                <div>
                  <label className="text-sm font-bold mb-1 block" htmlFor="name">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="What should I call you?..."
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600"
              />
                </div>

                <div>
                  <label className="text-sm font-bold mb-1 block" htmlFor="email">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Where can I reach you? ..."
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600"
                />
                </div>

                <div>
                  <label className="text-sm font-bold mb-1 block" htmlFor="message">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                     placeholder="Tell me about your project or just say hi :) ..."
                    rows={3}
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600 resize-none"
                ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;


// import React from 'react';
// import { WorkExperience } from '../data';

// interface WorkExperienceSectionProps {
//   workExperience: WorkExperience[];
// }

// const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({ workExperience }) => {
//   return (
//     <section className="py-12 md:py-16 px-4 bg-white relative">
//       <div className="container mx-auto max-w-md md:max-w-4xl">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
//             <span className="text-sm font-bold text-gray-900">Work Experience</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 px-4">
//             A timeline of companies and roles that helped shape my skills.
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className=" absolute left-3 top-3 bottom-[450px] w-px bg-gray-300 md:left-1/2" z-0></div>

//           <div className="relative space-y-6">
//             {workExperience.map((job, idx) => (
//               <div key={idx} className="flex gap-3 items-start">
//                 {/* Timeline Dot */}
//                 <div className={`relative z-10 w-6 h-6 rounded-full flex-shrink-0 ${idx === 0 ? 'bg-primary' : 'bg-gray-300'} border-4 ${idx === 0 ? 'border-blue-300' : 'border-gray-400'} `}></div>

//                 {/* Card */}
//                 <div className="flex-1">
//                   <img
//                     src={job.image}
//                     alt={job.company}
//                     className="w-full h-44 object-cover rounded-t-3xl"
//                   />
//                   <div className="bg-white rounded-b-3xl p-4 shadow-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M7 4.018C6.46 4.041 6.072 4.092 5.729 4.208C5.14238 4.40442 4.60932 4.73422 4.17171 5.17148C3.73411 5.60874 3.40388 6.14154 3.207 6.728C3 7.349 3 8.115 3 9.649C3 9.744 3 9.792 3.013 9.83C3.02528 9.86679 3.04594 9.90021 3.07337 9.92763C3.10079 9.95506 3.13421 9.97572 3.171 9.988C3.209 10.001 3.257 10.001 3.353 10.001H20.647C20.743 10.001 20.791 10.001 20.829 9.988C20.8658 9.97572 20.8992 9.95506 20.9266 9.92763C20.9541 9.90021 20.9747 9.86679 20.987 9.83C21 9.791 21 9.743 21 9.647C21 8.114 21 7.347 20.793 6.729C20.5964 6.14217 20.2663 5.60897 19.8287 5.17135C19.391 4.73372 18.8578 4.40362 18.271 4.207C17.928 4.092 17.539 4.041 17 4.018V6.5C17 6.89782 16.842 7.27936 16.5607 7.56066C16.2794 7.84196 15.8978 8 15.5 8C15.1022 8 14.7206 7.84196 14.4393 7.56066C14.158 7.27936 14 6.89782 14 6.5V4H10V6.5C10 6.89782 9.84196 7.27936 9.56066 7.56066C9.27936 7.84196 8.89782 8 8.5 8C8.10218 8 7.72064 7.84196 7.43934 7.56066C7.15804 7.27936 7 6.89782 7 6.5V4.018Z" />
//                         <path d="M3 11.5C3 11.264 3 11.146 3.073 11.073C3.146 11 3.264 11 3.5 11H20.5C20.736 11 20.854 11 20.927 11.073C21 11.146 21 11.264 21 11.5V12C21 15.771 21 17.657 19.828 18.828C18.656 19.999 16.771 20 13 20H11C7.229 20 5.343 20 4.172 18.828C3.001 17.656 3 15.771 3 12V11.5Z" fillOpacity="0.25" />
//                       </svg>
//                       <span className="text-sm font-bold text-gray-900">{job.date}</span>
//                     </div>
                    
//                    <img
//                       src={job.logo}
//                       alt={job.company}
//                       className="w-auto h-[35px] object-cover " />
                  
//                     <div className=" mb-3"></div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend Developer</h3>
//                     <p className="text-sm text-gray-900 font-medium">
//                       Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperienceSection;

import React from 'react';
import { type WorkExperience } from '../data';

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

// Saya membuat sub-komponen (helper) untuk Card Konten agar tidak duplikat kode
// Ini menggunakan konten dari snippet yang Anda berikan.
const ContentCard: React.FC<{ job: WorkExperience }> = ({ job }) => (
  <div className="bg-white rounded-[20px] p-5 shadow-[0px_1px_16px_1px_#0000001A] h-[285px]">
    <div className="flex items-center gap-2 mb-2">
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 4.018C6.46 4.041 6.072 4.092 5.729 4.208C5.14238 4.40442 4.60932 4.73422 4.17171 5.17148C3.73411 5.60874 3.40388 6.14154 3.207 6.728C3 7.349 3 8.115 3 9.649C3 9.744 3 9.792 3.013 9.83C3.02528 9.86679 3.04594 9.90021 3.07337 9.92763C3.10079 9.95506 3.13421 9.97572 3.171 9.988C3.209 10.001 3.257 10.001 3.353 10.001H20.647C20.743 10.001 20.791 10.001 20.829 9.988C20.8658 9.97572 20.8992 9.95506 20.9266 9.92763C20.9541 9.90021 20.9747 9.86679 20.987 9.83C21 9.791 21 9.743 21 9.647C21 8.114 21 7.347 20.793 6.729C20.5964 6.14217 20.2663 5.60897 19.8287 5.17135C19.391 4.73372 18.8578 4.40362 18.271 4.207C17.928 4.092 17.539 4.041 17 4.018V6.5C17 6.89782 16.842 7.27936 16.5607 7.56066C16.2794 7.84196 15.8978 8 15.5 8C15.1022 8 14.7206 7.84196 14.4393 7.56066C14.158 7.27936 14 6.89782 14 6.5V4H10V6.5C10 6.89782 9.84196 7.27936 9.56066 7.56066C9.27936 7.84196 8.89782 8 8.5 8C8.10218 8 7.72064 7.84196 7.43934 7.56066C7.15804 7.27936 7 6.89782 7 6.5V4.018Z" />
        <path d="M3 11.5C3 11.264 3 11.146 3.073 11.073C3.146 11 3.264 11 3.5 11H20.5C20.736 11 20.854 11 20.927 11.073C21 11.146 21 11.264 21 11.5V12C21 15.771 21 17.657 19.828 18.828C18.656 19.999 16.771 20 13 20H11C7.229 20 5.343 20 4.172 18.828C3.001 17.656 3 15.771 3 12V11.5Z" fillOpacity="0.25" />
      </svg>
      <span className="text-sm font-bold text-gray-900">{job.date}</span>
    </div>

    
    <img src={job.logo} />

    <div className="mb-3"></div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend Developer</h3>
    <p className="text-sm text-gray-900 font-medium">
      Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences
    </p>
  </div>
);

const TimelineDot: React.FC<{ idx: number }> = ({ idx }) => (
  <div className={`relative z-10 w-6 h-6 rounded-full flex-shrink-0 ${idx === 0 ? 'bg-primary' : 'bg-gray-300'} border-4 ${idx === 0 ? 'border-blue-300' : 'border-gray-400'}`}></div>
);




const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({ workExperience }) => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white relative">
      <div className="container mx-auto max-w-md md:max-w-[1184px] ">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 px-4">
            A timeline of companies and roles that helped shape my skills.
          </h2>
        </div>

        {/* --- MOBILE VIEW (default, disembunyikan di 'md') --- */}
        <div className="relative md:hidden">
          {/* Garis Timeline Mobile (memperbaiki typo z-0 dan bottom) */}
          <div className="absolute left-3 top-3 bottom-[450px] w-px bg-gray-300 z-0"></div>

          <div className="relative space-y-6">
            {workExperience.map((job, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <TimelineDot idx={idx} />
                {/* Card Mobile */}
                <div className="flex-1">
                  <img
                    src={job.image}
                    alt={job.company}
                    className="w-full h-44 object-cover rounded-t-3xl"
                  />
                  {/* Menggunakan card konten baru agar konsisten */}
                  <div className="  ">
                    <ContentCard job={job} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP VIEW (tersembunyi, ditampilkan di 'md') --- */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:relative md:mx-auto">
          
          {/* Garis Timeline Desktop (di tengah, kolom 2) */}
          <div className="absolute left-1/2 top-36 bottom-36 w-px bg-gray-300 -translate-x-1/2  z-0"></div>

          {workExperience.map((job, idx) => {
            const isEven = idx % 2 === 0; // Cek apakah index genap (0, 2, ...)

            if (isEven) {
              // BARIS GENAP (Baris 1, 3, dst.): Gambar di Kiri, Konten di Kanan
              return (
                <React.Fragment key={idx}>
                  {/* Kolom 1: Gambar */}
                  <div className="col-start-1 text-right items-center">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-auto h-[285px] rounded-[20px] object-cover inline-block"
                    />
                  </div>
                  {/* Kolom 2: Dot */}
                  <div className="col-start-2 z-10 relative top-36 bottom-36  mx-auto">
                    <TimelineDot idx={idx} />
                  </div>
                  {/* Kolom 3: Konten */}
                  <div className="col-start-3 text-left mb-6 items-center">
                    <div className="w-[551.5px] inline-block text-left">
                      <ContentCard job={job} />
                    </div>
                  </div>
                </React.Fragment>
              );
            } else {
              // BARIS GANJIL (Baris 2, 4, dst.): Konten di Kiri, Gambar di Kanan
              return (
                <React.Fragment key={idx}>
                  {/* Kolom 1: Konten */}
                  <div className="col-start-1 text-right">
                    <div className="w-[551.5px] inline-block text-left">
                      <ContentCard job={job} />
                    </div>
                  </div>
                  {/* Kolom 2: Dot */}
                  <div className="col-start-2 z-10 relative top-36 bottom-36  mx-auto">
                    <TimelineDot idx={idx} />
                  </div>
                  {/* Kolom 3: Gambar */}
                  <div className="col-start-3 mb-6">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-[551.5px] h-[285px] rounded-[20px] object-cover"
                    />
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
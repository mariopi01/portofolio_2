import React from 'react';
import { type Skill } from '../data';

interface SkillsetSectionProps {
  skills: Skill[];
}

const SkillsetSection: React.FC<SkillsetSectionProps> = ({ skills }) => {
  return (
    <section className="py-12 md:py-16 px-4 bg-primary">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-white">Skillset</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
            Skills That Build Great Interfaces
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-28 h-28" viewBox="0 0 114 113">
                  <circle cx="54.2" cy="58" r="54.2" fill="#E4E4E7" />
                  <circle cx="54.2" cy="58" r="46.6" fill="white" />
                  <path d="M113.422 57.9791C113.422 49.5128 111.568 41.1492 107.99 33.4761C104.412 25.803 99.1968 19.0066 92.7113 13.5645C86.2257 8.12249 78.6269 4.16684 70.4491 1.97559C62.2712 -0.215655 53.7127 -0.589328 45.375 0.880835L48.0014 15.776C54.1641 14.6894 60.49 14.9656 66.5345 16.5852C72.5789 18.2048 78.1954 21.1286 82.9891 25.151C87.7828 29.1734 91.6374 34.1968 94.282 39.8682C96.9267 45.5396 98.2971 51.7214 98.2971 57.9791H113.422Z" fill="#F3B64C" />
                  <text x="29" y="67" fill="#0A0D12" fontFamily="Mulish" fontSize="24" fontWeight="bold">{skill.percentage}%</text>
                </svg>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center p-1">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-gray-900">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsetSection;
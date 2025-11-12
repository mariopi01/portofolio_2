import React from 'react';
import { ImageAssets } from '../data';

interface SuperioritySectionProps {
  myItems: string[];
  otherItems: string[];
}

const SuperiorityCard: React.FC<{ title: string; avatar?: string; items: string[]; isPositive: boolean }> = ({ title, avatar, items, isPositive }) => (
  <div className={`${isPositive ? 'bg-yellow-400' : 'border border-gray-300'} rounded-3xl p-6 mb-4`}>
    <h3 className="text-center text-gray-900 text-lg font-bold mb-4">{title}</h3>

    <div className={`w-16 h-16 rounded-full mx-auto mb-6 overflow-hidden ${isPositive ? 'bg-primary' : 'bg-gray-200'}`}>
      {avatar ? (
        <img
          src={avatar}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-16 h-16 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-500" viewBox="0 0 48 48" fill="currentColor">
            <path d="M24 4C18.76 4 14.5 8.26 14.5 13.5C14.5 18.64 18.52 22.8 23.76 22.98C23.92 22.96 24.08 22.96 24.2 22.98C24.24 22.98 24.26 22.98 24.3 22.98C24.32 22.98 24.32 22.98 24.34 22.98C29.46 22.8 33.48 18.64 33.5 13.5C33.5 8.26 29.24 4 24 4Z" />
            <path d="M34.1599 28.2998C28.5799 24.5798 19.4799 24.5798 13.8599 28.2998C11.3199 29.9998 9.91992 32.2998 9.91992 34.7598C9.91992 37.2198 11.3199 39.4998 13.8399 41.1798C16.6399 43.0598 20.3199 43.9998 23.9999 43.9998C27.6799 43.9998 31.3599 43.0598 34.1599 41.1798C36.6799 39.4798 38.0799 37.1998 38.0799 34.7198C38.0599 32.2598 36.6799 29.9798 34.1599 28.2998Z" />
          </svg>
        </div>
      )}
    </div>

    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx}>
          <div className="flex items-center gap-3">
            <svg className={`w-8 h-8 ${isPositive ? 'text-primary' : 'text-primary/40'} flex-shrink-0`} viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.0177 0L18.4008 8.66546L25.4222 3.05573L22.2568 11.467L31.2345 11.0557L23.7297 16L31.2345 20.9443L22.2568 20.533L25.4222 28.9443L18.4008 23.3346L16.0177 32L13.6345 23.3346L6.61312 28.9443L9.77854 20.533L0.800781 20.9443L8.30569 16L0.800781 11.0557L9.77854 11.467L6.61312 3.05573L13.6345 8.66546L16.0177 0Z" />
            </svg>
            <span className={`font-bold text-gray-900 ${!isPositive && 'opacity-70'}`}>{item}</span>
          </div>
          {idx < items.length - 1 && <div className={`h-px ${isPositive ? 'bg-white/50' : 'bg-gray-300'} my-4`}></div>}
        </div>
      ))}
    </div>
  </div>
);

const SuperioritySection: React.FC<SuperioritySectionProps> = ({ myItems, otherItems }) => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Superiority</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Built with design, speed, and UX in mind.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center md:justify-center">
          <SuperiorityCard 
            title="Working with me" 
            avatar={ImageAssets.superiorityAvatar}
            items={myItems} 
            isPositive={true} 
          />
          
          <SuperiorityCard 
            title="Another Developer" 
            items={otherItems} 
            isPositive={false} 
          />
        </div>

        <button className="w-[361px] block mx-auto bg-primary text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors">
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default SuperioritySection;
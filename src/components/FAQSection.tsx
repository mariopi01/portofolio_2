import React, { useState } from 'react';
import { type Faq } from '../data';

interface FAQSectionProps {
  faqs: Faq[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-48 px-4  bg-[linear-gradient(202.5deg,var(--tw-gradient-stops))] 
  from-[#0D0A2C] via-[#4D3589] to-[#BADAFF]] ">
      {/* Background gradient */}
      <div className="relative inset-0 "></div>

      <div className="container mx-auto max-w-md md:max-w-4xl relative z-10">
        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-3">
          <div className="bg-white rounded-3xl p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-3">
                <span className="text-sm font-bold text-gray-900">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
                Need More Info? Start Here
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-300 rounded-3xl p-3">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="font-bold text-gray-900">{faq.question}</span>
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                      {openFaq === idx ? (
                        <svg className="w-4 h-4" viewBox="0 0 15 15" fill="none" stroke="currentColor">
                          <path d="M3.0625 7.35H11.6375" strokeWidth="1.225" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" viewBox="0 0 15 15" fill="none" stroke="currentColor">
                          <path d="M7.35 3.0625V11.6375M3.0625 7.35H11.6375" strokeWidth="1.225" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </button>
                  {openFaq === idx && (
                    <>
                      <div className="h-px bg-gray-300 my-3"></div>
                      <p className="text-gray-700 text-sm font-medium">{faq.answer}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
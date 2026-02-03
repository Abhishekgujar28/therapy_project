'use client';
import { useState } from 'react';

const faqs = [
  { question: "Do you take insurance?", answer: "Yes, I accept most major insurance plans. Please contact me to verify your specific coverage." },
  { question: "What are your rates?", answer: "My rates vary depending on the service. Initial consultation is free. Please reach out for a detailed fee schedule." },
  { question: "Do you have any openings?", answer: "Currently I am accepting new patients for both in-person and virtual sessions." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#fbf6f1] px-6 md:px-10 lg:px-14 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
       {/* Left: Image */}
      <div className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:max-w-[70%] mx-auto md:mx-30 md:my-0 ">
        <div className="absolute inset-0 bg-gray-200 rounded-t-[20rem] md:rounded-t-[18rem] overflow-hidden">
           {/* Placeholder for the arched image */}
           <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
             <span className="sr-only">Hero Image: Woman with flowers</span>
             {/* Simulating image content */}
             <div className="w-full h-full bg-cover bg-center opacity-90" style={{ backgroundImage: "url(' https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w')" }}></div>
           </div>
        </div>
      </div>

       {/* Right: Content */}
       <div className="flex flex-col space-y-8 pt-38">
         <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif text-primary mb-10">FAQs</h2>
         
         <div className="w-full border-t border-[#223614]">
           {faqs.map((faq, i) => (
             <div key={i} className="border-b border-[#223614]">
               <button 
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 className="w-full py-6 flex items-center justify-start gap-7 text-left group"
               >
                 <span className="text-5xl font-light text-[#223614]">
                   {openIndex === i ? '−' : '+'}
                 </span>
                 <span className="text-lg md:text-5xl font-serif text-[#223614] group-hover:text-primary transition-colors">
                   {faq.question}
                 </span>
                
               </button>
               <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                 <p className="text-[#223614] font-medium text-base md:text-base leading-relaxed">
                   {faq.answer}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
}

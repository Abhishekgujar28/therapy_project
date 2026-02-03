'use client';
import { useState } from 'react';

const items = [
  { title: "Education", content: "Ph.D. in Clinical Psychology from the University of Minnesota. Master's in Counseling Psychology." },
  { title: "Licensure", content: "Licensed Psychologist in Minnesota (License #12345). Licensed Professional Clinical Counselor." },
  { title: "Certifications", content: "Certified in Cognitive Behavioral Therapy (CBT). Certified in Dialectical Behavior Therapy (DBT)." }
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#e5e0da] px-6 md:px-10 lg:px-14 py-20 md:py-32 flex flex-col items-center">
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-12 text-center">
         My Professional Background
       </h2>
       
       <div className="w-full max-w-3xl border-t border-[#223614]">
         {items.map((item, i) => (
           <div key={i} className="border-b border-[#223614]">
             <button 
               onClick={() => setOpenIndex(openIndex === i ? null : i)}
               className="w-full py-5 flex items-center justify-between text-left   transition-colors px-4"
             >
               <span className="text-sm md:text-xl font-bold text-[#223614] uppercase tracking-widest">
                 {item.title}
               </span>
               <span className="text-2xl font-light text-[#223614]">
                 {openIndex === i ? '−' : '+'}
               </span>
             </button>
             <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
               <div className="px-4 pb-6 text-lg text-[#223614] font-medium ml-28">
                 {item.content}
               </div>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
}

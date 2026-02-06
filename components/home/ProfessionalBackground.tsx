'use client';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { title: "Education", content: "Ph.D. in Clinical Psychology from the University of Minnesota. Master's in Counseling Psychology." },
  { title: "Licensure", content: "Licensed Psychologist in Minnesota (License #12345). Licensed Professional Clinical Counselor." },
  { title: "Certifications", content: "Certified in Cognitive Behavioral Therapy (CBT). Certified in Dialectical Behavior Therapy (DBT)." }
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(listRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-bgSection px-6 md:px-10 lg:px-14 py-20 md:py-32 flex flex-col items-center">
       <h2 ref={titleRef} className="text-4xl md:text-4xl lg:text-5xl font-serif text-textPrimary mb-12 text-center">
         My Professional Background
       </h2>
       
       <div ref={listRef} className="w-full max-w-3xl border-t border-textPrimary">
         {items.map((item, i) => (
           <div key={i} className="border-b border-textPrimary">
             <button 
               onClick={() => setOpenIndex(openIndex === i ? null : i)}
               className="w-full py-5 flex items-center justify-between text-left   transition-colors px-4"
             >
               <span className="text-xl md:text-xl font-bold text-textPrimary uppercase tracking-widest">
                 {item.title}
               </span>
               <span className="text-2xl font-light text-textPrimary">
                 {openIndex === i ? '−' : '+'}
               </span>
             </button>
             <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
               <div className="px-4 pb-6 text-lg text-textPrimary font-medium md:ml-28">
                 {item.content}
               </div>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
}

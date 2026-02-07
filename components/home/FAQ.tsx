'use client';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: "Do you take insurance?", answer: "Yes, I accept most major insurance plans. Please contact me to verify your specific coverage." },
  { question: "What are your rates?", answer: "My rates vary depending on the service. Initial consultation is free. Please reach out for a detailed fee schedule." },
  { question: "Do you have any openings?", answer: "Currently I am accepting new patients for both in-person and virtual sessions." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(imageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(contentRef.current?.children || [], {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-bgMain px-6 md:px-10 lg:px-14 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
       {/* Left: Image */}
      <div ref={imageRef} className="relative w-full aspect-[3/4] md:aspect-[2/3] max-w-[250px] lg:max-w-[70%] mx-auto md:mx-30 md:my-0 ">
        <div className="absolute inset-0 bg-bgAccent rounded-t-[20rem] md:rounded-t-[18rem] overflow-hidden">
           {/* Placeholder for the arched image */}
           <div className="w-full h-full bg-bgSection flex items-center justify-center text-textMuted">
             <span className="sr-only">Hero Image: Woman with flowers</span>
             {/* Simulating image content */}
             <div className="w-full h-full bg-cover bg-center opacity-90" style={{ backgroundImage: "url(' https://images.unsplash.com/photo-1616593437252-0631aeb95590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1ZXN0aW9ufGVufDB8fDB8fHww')" }}></div>
           </div>
        </div>
      </div>

       {/* Right: Content */}
       <div ref={contentRef} className="flex flex-col space-y-8 pt-10 md:pt-38">
         <h2 className="text-4xl md:text-4xl lg:text-6xl font-serif text-textPrimary mb-10">FAQs</h2>
         
         <div className="w-full border-t border-textPrimary">
           {faqs.map((faq, i) => (
             <div key={i} className="border-b border-textPrimary">
               <button 
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 className="w-full py-6 flex items-center justify-start gap-7 text-left group"
               >
                 <span className="text-5xl font-light text-textPrimary">
                   {openIndex === i ? '−' : '+'}
                 </span>
                 <span className="text-3xl md:text-5xl font-serif text-textPrimary group-hover:text-primary transition-colors">
                   {faq.question}
                 </span>
                
               </button>
               <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                 <p className="text-textPrimary font-medium text-base md:text-base leading-relaxed">
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

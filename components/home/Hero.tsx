
'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    })
    .from(textRef.current?.children || [], {
      y: 50,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=1");
    
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className=" bg-bgMain w-full px-6 md:px-10 lg:px-14 pt-12 md:pt-20 lg:pt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24  ">
      {/* Left Column: Image (Based on PDF Visual) */}
      <div ref={imageRef} className="relative w-full aspect-[3/4] md:aspect-[2/3] max-w-[60%] md:max-w-none lg:max-w-[88%] mx-auto md:mr-12 ">
        <div className="absolute inset-0 bg-bgAccent rounded-t-[9rem] md:rounded-t-[18rem] overflow-hidden">
           {/* Placeholder for the arched image */}
           <div className="w-full h-full bg-bgSection flex items-center justify-center text-textMuted">
             <span className="sr-only">Hero Image: Bloom</span>
             {/* Simulating image content */}
             <div className="w-full h-full bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1200&auto=format&fit=crop')" }}></div>
           </div>
        </div>
      </div>

      {/* Right Column: Text */}
      <div ref={textRef} className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 lg:pr-10 py-10 md:py-12 lg:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[5rem] text-textPrimary font-serif leading-[1.1]">
          {/* Live your life <br />  in full bloom */}
          find steadiness, clarity, <br className="hidden md:block" /> and room to breathe.
        </h1>
        <p className="text-xs md:text-sm lg:text-base font-medium text-textPrimary uppercase tracking-widest max-w-md md:max-w-none mx-auto md:mx-0">
          Anxiety and Trauma Therapist in Santa Monica, CA
        </p>
         <div className="my-8 md:my-10 lg:my-0 flex justify-center md:justify-start w-full">
           <Link href="/contact" className="group px-8 py-3 border border-textPrimary text-textPrimary text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-textPrimary hover:text-bgMain transition-all duration-300 flex items-center gap-2">
             Connect with me
             <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
           </Link>
         </div>
       
      </div>
      
    </section>
  );
}

'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    tl.from(textRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8");
    
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-bgSoft px-6 md:px-10 lg:px-32 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center overflow-hidden">
      {/* Left: Text */}

 <div ref={imageRef} className=" lg:hidden  relative w-full max-w-[250px] mx-auto md:max-w-md">
         {/* Arched Image */}
         <div className="aspect-[3/4] relative z-10">
            <div className="absolute inset-0 rounded-t-[10rem] md:rounded-t-[12rem] overflow-hidden bg-bgSection ">
                <div className="w-full h-full bg-[url('/dr.png')] bg-cover bg-center"></div>
            </div>
         </div>
         
         {/* Overlapping Circle Image */}
         <div className="absolute -bottom-12 -right-14 md:-right-22 w-32 h-32 md:w-70 md:h-70 rounded-full   overflow-hidden  z-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310159-52f0f913202c?q=80&w=2070&auto=format&fit=crop')" }}></div>
         </div>
      </div>

      <div ref={textRef} className="flex flex-col items-start space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-sans text-textPrimary ">
          Hi, I&apos;m Dr. Maya Reynolds.
        </h2>
        <p className="text-textPrimary text-sm md:text-[20px] leading-loose  font-medium ">
          I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
        </p>
        <div className="pt-10">
           <button className="px-8 py-3 border border-textPrimary text-textPrimary text-sm font-bold   uppercase hover:bg-textPrimary hover:text-white hover:border-textPrimary transition-all duration-300">
            
            <Link href="/about" className="flex items-center justify-center"> About Me &rarr; </Link>
           </button>
        </div>
      </div>
      
      {/* Right: Image */}
      <div ref={imageRef} className=" hidden lg:block relative w-full max-w-sm mx-auto md:max-w-md">
         {/* Arched Image */}
         <div className="aspect-[3/4] relative z-10">
            <div className="absolute inset-0 rounded-t-[10rem] md:rounded-t-[12rem] overflow-hidden bg-bgSection ">
                <div className="w-full h-full   bg-cover bg-center">
                  <img src="/dr.png" alt="Dr. Maya Reynolds" className="w-full h-full object-cover" />
                </div>
            </div>
         </div>
         
         {/* Overlapping Circle Image */}
         <div className="absolute -bottom-12 -right- md:-right-22 w-32 h-32 md:w-70 md:h-70 rounded-full   overflow-hidden  z-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310159-52f0f913202c?q=80&w=2070&auto=format&fit=crop')" }}></div>
         </div>
      </div>
    </section>
  );
}


'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FulfillingLife() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(textRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");
    
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className=" bg-bgMain overflow-hidden w-full grid grid-cols-1 md:grid-cols-2   text-textPrimary">
      {/* Left: Text */}
      <div ref={textRef} className="px-6 md:px-12 lg:px-14 py-20 md:py-32  flex flex-col justify-between h-full bg-bgAccent">
        <div className="flex flex-col justify-center  space-y-10 ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-textPrimary">
          You don’t have to carry this alone.
          </h2>
          <div className="space-y-4 text-textPrimary leading-relaxed max-w-full font-sans text-base md:text-xl">
            <p>
            Life can feel overwhelming when stress, anxiety, or constant pressure start to pile up  </p>
            <p>
             Therapy can be a space to slow down, feel supported, and work through challenges in a way that feels steady and manageable.  </p>
          </div>
        </div>
        
        <div className="w-full border-t border-textPrimary/30 pt-8 mt-16 text-center cursor-pointer">
           <button className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-70 flex items-center justify-center gap-2 transition-opacity mx-auto text-textPrimary">
            Get In Touch <span>&rarr;</span>
           </button>
        </div>
      </div>
      
      {/* Right: Image */}
      <div ref={imageRef} className="relative h-64 md:h-auto min-h-[500px] bg-bgSection w-full overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(' https://i.pinimg.com/736x/be/85/84/be8584386591cc452ada346c46d3c68f.jpg')" }}></div>
      </div>
    </section>
  );
}

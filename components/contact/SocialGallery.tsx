'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SocialGallery = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from((imagesRef.current as any)?.children || [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24">
      <h2 ref={titleRef} className="text-3xl md:text-6xl font-medium mb-12 text-textPrimary">Find me on social.</h2>
      <div ref={imagesRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
      </div>
    </section>
  );
};

export default SocialGallery;

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
        toggleActions: "play none none reverse",
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
            <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
         <div className="aspect-square bg-bgAccent overflow-hidden">
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
         </div>
      </div>
    </section>
  );
};

export default SocialGallery;

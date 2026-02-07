'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactIntro = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative">
      <p ref={textRef} className="text-xl mb-8 max-w-md leading-relaxed text-textBody">
        Starting therapy is courageous.
        <br /><br />
        Get in touch for questions, or to book a free 15-minute consultation.
      </p>
      <div ref={imageRef} className="relative h-80 w-full max-w-xs mt-6">
         {/* Arch Image */}
         <div className="absolute top-0 left-18 w-40 h-60 md:w-56 md:h-80  bg-bgSection rounded-t-full z-10 overflow-hidden">
            <img 
              src=" https://images.unsplash.com/photo-1492138195150-d71143066b68?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Lilac flowers" 
              className="w-full h-full object-cover" 
            />
         </div>
         {/* Circle Image */}
         <div className="absolute bottom-12 md:bottom-0 right-6 right   md:-right-8 md:-bottom-32 w-30 h-30 md:w-40 md:h-40 bg-bgAccent rounded-full z-20 overflow-hidden ">
            <img 
              src="https://saroj.in/cdn/shop/files/WhatsAppImage2023-03-08at8.09.33PM.jpg?v=1728304027" 
              alt="Nature calm" 
              className="w-full h-full object-cover" 
            />
         </div>
      </div>
    </div>
  );
};

export default ContactIntro;

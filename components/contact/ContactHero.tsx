'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContactHero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-12 pb-6 px-6 md:px-12 lg:px-28">
      <div className="max-w-7xl mx-auto">
         
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-serif font-medium mt-8 mb-8 text-primary">Let’s Connect</h1>
      </div>
    </section>
  );
};

export default ContactHero;

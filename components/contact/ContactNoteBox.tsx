"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactNoteBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-footerBg p-8 md:p-12 text-white max-w-xl mr-18 w-full">
      <p className="text-sm md:text-xl leading-relaxed text-white">
        <span className="font-bold text-white">PLEASE NOTE:</span> if you opt to use a “Form Block” on
        your contact page this is not HIPAA-compliant.
        Squarespace stores data that is input into forms in
        the Marketing tab under Profiles. Instead, you can
        embed a HIPAA-compliant form, a link to your client
        portal, or simply put your email address.
      </p>
    </div>
  );
};

export default ContactNoteBox;

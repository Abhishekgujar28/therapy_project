'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSubscribe = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from("p", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6")
    .from(formRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-primary py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto border border-white p-12 md:p-20 text-center">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-medium text-white mb-6">Subscribe</h2>
        <p className="text-white text-xl mb-10">
          Sign up with your email address to receive news and updates.
        </p>
        
        <form ref={formRef} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-white px-6 py-4 outline-none placeholder-textMuted text-textPrimary"
          />
          <button 
            type="button" 
            className="bg-primary border border-white text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-colors"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-white text-xl">We respect your privacy.</p>
      </div>
    </section>
  );
};

export default BlogSubscribe;

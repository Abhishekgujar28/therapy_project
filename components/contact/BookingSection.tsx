"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BookingSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
    .from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-bgMain py-24 px-6 text-center">
       <h2 ref={titleRef} className="text-3xl md:text-6xl font-serif font-medium mb-6 text-textPrimary">Contact Me.</h2>
       <p className="max-w-xl mx-auto mb-16 text-sm md:text-base text-start text-textBody font-sans">
         Add some text here if you like, and add your scheduling widget below (you
         can get one by signing up for a scheduling account through
         Squarespace, the top-tier plan is HIPAA compliant OR you can use your
         client portal).
       </p>
       <div ref={formRef} className="p-8 max-w-xl mx-auto text-left">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-serif font-medium text-textPrimary mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-b border-textPrimary/50 px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/50 transition-all bg-transparent text-textPrimary font-sans"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-serif font-medium text-textPrimary mb-3"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-b border-textPrimary/50 px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/50 transition-all bg-transparent text-textPrimary font-sans"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-base font-serif font-medium text-textPrimary mb-3"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border-b border-textPrimary/50 px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/50 transition-all bg-transparent resize-none text-textPrimary font-sans"
              placeholder="Tell us a bit about what you're looking for..."
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full cursor-pointer bg-buttonPrimary text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-buttonPrimaryHover transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;

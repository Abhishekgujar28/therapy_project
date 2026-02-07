'use client';
import Link from "next/link";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    .from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(buttonRef.current, {
      y: 20,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-primary px-6 md:px-10 lg:px-14 py-20 md:py-32 flex flex-col items-center text-center space-y-8">
      <h2 ref={titleRef} className="text-4xl md:text-4xl lg:text-5xl font-serif text-white">
        Get started today.
      </h2>
      <p ref={textRef} className="text-white max-w-xl text-lg md:text-[21px] leading-relaxed font-medium">
        Ready to take the first step towards a happier, healthier you? Contact me to book your first session. I look forward to starting this therapeutic journey with you.
      </p>
      <button ref={buttonRef} className="mt-8 px-10 py-3 border border-white text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300">
       <Link href={'/contact'}> Contact Me &rarr;</Link>
      </button>
    </section>
  );
}

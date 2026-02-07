'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NotAlone() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(contentRef.current?.children || [], {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className=" overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 ">
      {/* Left: Image (Order 2 on mobile, Order 1 on desktop) */}
      <div ref={imageRef} className="relative h-64 md:h-auto min-h-[300px] lg:min-h-[700px] bg-bgAccent order-1 md:order-1">
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url(' https://plus.unsplash.com/premium_photo-1705628041832-8a35ae9b4f93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      </div>


      <div ref={contentRef} className="bg-bgSection px-6 md:px-10 lg:px-0  py-16 md:py-40 flex flex-col justify-center items-start space-y-6 order-2 md:order-2">

        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:px-16 font-serif text-textPrimary leading-tight">
          You don&apos;t have to do this all alone.
        </h2>
        <p className="text-xl font-bold tracking-wide text-textPrimary lg:px-16">
          If you are feeling any of these, there is hope:
        </p>

        <ul className="space-y-4 text-textPrimary text-sm md:text-xl pl-8 text-textPrimary lg:px-16">
          {/* Custom bullets or simple list */}
          {[
            "Persistent feelings of sadness or hopelessness",
            "Trouble focusing or making decisions",
            "Difficulty maintaining relationships",
            "Feeling constantly exhausted or unmotivated",
            "A pervasive sense of being overwhelmed"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1.5 text-[10px]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-2xl text-textPrimary font-medium font-sans pt-4 lg:px-16">
          With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
        </p>


        <div className="w-full border-t border-textPrimary py-6 text-center hover:bg-textPrimary hover:text-white relative bottom-[-160px] ">
          <button className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-70 flex items-center justify-center gap-2 animate-pulse transition-all transition-opacity mx-auto ">
            work with me  <span>&rarr;</span>
          </button>
        </div>



      </div>

    </section>
  );
}

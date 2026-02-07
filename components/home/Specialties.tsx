'use client';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    title: "Anxiety Therapy  ",
    desc: "  Practical tools to calm your nervous system, reduce overthinking, and feel more grounded in daily life..",
    img: "/burnout.png"
  },
  {
    title: "Trauma Therapy",
    desc: " Compassionate, evidence-based therapy to help you process trauma and restore a sense of safety and control..",
    img: "https://i.pinimg.com/736x/ee/a6/1b/eea61ba33c75b38b2c80db3b53ffb0e3.jpg"
  },
  {
    title: "Burnout & Perfectionism",
    desc: " Support for chronic stress, burnout, and self-pressure so you can build healthier limits and a more sustainable life..",
    img: "/anxiety.png"
  }
];

export default function Specialties() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(cardsRef.current?.children || [], {
      y: 100,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full px-6 md:px-10 lg:px-14 py-16 md:py-24 md:mb-24 bg-bgMain overflow-hidden">
      <div className="text-center mb-">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans text-textPrimary font-medium ">My Specialties</h2>
      </div>
      
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {specialties.map((item, index) => (
          <div key={index} className="bg-bgCard px-6 pt-8 pb-12 flex flex-col h-full relative overflow-hidden group border-1 border-gray-600 duration-300 rounded-lg">
            <h3 className="text-2xl md:text-xl font-serif text-textPrimary mb-6 uppercase tracking-wider">{item.title}</h3>
            <p className="text-lg md:text-base text-textBody leading-relaxed mb-12 relative z-10">
              {item.desc}
            </p>
            
            {/* Circular Image at bottom */}
            <div className="mt-auto self-center relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ">
               <div className="w-full h-full bg-bgSection relative">
                 <Image 
                   src={item.img} 
                   alt={item.title}
                   fill
                   className="object-cover"
                 />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

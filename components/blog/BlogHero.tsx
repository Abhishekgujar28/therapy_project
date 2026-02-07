"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(textRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-bgMain">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-38 py-16 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-0 ">
        <div ref={imageRef} className="relative w-[230px] h-[320px] md:h-[780px] lg:w-[530px] overflow-hidden rounded-t-[380px] mx-auto ">
          <img
            src="https://i.pinimg.com/1200x/d2/7b/0d/d27b0dd34c0cb828905bbd4dba89194f.jpg"
            alt="Reading with tea"
            className="w-full h-full object-cover"
          />
        </div>
        <div ref={textRef} className="flex flex-col mt-38">
          <h1 className="text-5xl md:text-8xl font-medium mb-6 text-textPrimary">The Maya Reynolds blogs</h1>
          <p className="text-base md:text-2xl  leading-relaxed max-w-[330px] text-textBody">
            My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
            
          </p>
          <p className="text-base md:text-xl font-bold leading-relaxed max-w-[330px] mt-8 text-textPrimary">
            Glad you’re here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

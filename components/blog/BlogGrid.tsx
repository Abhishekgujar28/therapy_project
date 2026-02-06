'use client';
import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/blogData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogGrid = () => {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(gridRef.current?.children || [], {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-bgSection">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-18 py-12 md:py-20">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

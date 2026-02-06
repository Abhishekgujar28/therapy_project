'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlogPostViewProps {
  post: {
    title: string;
    date: string;
    image: string;
    content: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

export default function BlogPostView({ post, nextPost }: BlogPostViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(imageRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-20 px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase mb-6 opacity-60 text-textMuted">
          {post.date}
        </p>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif font-medium text-textPrimary mb-12 leading-tight">
          {post.title}
        </h1>
        <div ref={imageRef} className="w-full aspect-video rounded-sm overflow-hidden mb-12 shadow-sm">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div ref={contentRef} className="prose prose-xl prose-p:font-sans prose-headings:font-serif prose-headings:font-medium text-[20px] md:text-[22px] leading-relaxed max-w-none text-textBody opacity-90 whitespace-pre-line">
        {post.content}
      </div>

      <div className="mt-20 border-t border-textPrimary/20 pt-10 flex justify-end">
        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col items-end text-right"
          >
            <span className="text-xs font-bold tracking-widest uppercase mb-2 text-textMuted">Next Post</span>
            <span className="text-2xl md:text-4xl font-serif font-medium text-textPrimary group-hover:text-primary transition-colors flex items-center gap-4">
              {nextPost.title}
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

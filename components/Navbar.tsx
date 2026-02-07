"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // GSAP Animation for Menu
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        display: "flex"
      });
      
      gsap.fromTo(".menu-item", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        display: "none"
      });
    }
  }, [isOpen]);

  // Determine background color based on route
  const getNavbarBackground = () => {
    if (pathname === '/contact') {
      return 'bg-primarySoft'; // Lilac color matching the contact page design
    }
    else if (pathname === '/blog') {
      return 'bg-bgMain'; // Default to white for home and other pages
    }
    else if (pathname?.startsWith('/blog/') && pathname !== '/blog') {
      return 'bg-bgSoft';
    }
    return 'bg-bgMain'; // Default to white for home and other pages
  };

  return (
    <nav className={`top-0 z-50 w-full ${getNavbarBackground()} backdrop-blur-sm transition-colors duration-300`}>
      <div className="py-5 px-6 md:px-12 lg:px-15 lg:py-3 w-full">
        
        {/* Mobile/Tablet Layout (< lg) */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Left: Dr. Name (Small Text) */}
          <div className="text-lg font-bold font-serif text-textPrimary tracking-tight z-50">
            <Link href="/">Dr. Maya Reynolds</Link>
          </div>

          {/* Right: Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="z-50 relative flex flex-col justify-center items-center w-8 h-8 gap-2 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <span className={`w-8 h-0.5 bg-textPrimary block transition-all duration-300 ease-in-out transform origin-center ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-textPrimary block transition-all duration-300 ease-in-out transform origin-center ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>

        {/* Desktop Layout (>= lg) */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left: Dr. Name (Large Text) */}
          <div className="text-[34.432px] font-[500] leading-[41.3184px] text-textPrimary font-serif tracking-tight">
            <Link href="/">Dr. Maya Reynolds</Link>
          </div>
          
          {/* Right: Links */}
          <div className="flex gap-8 md:gap-12 text-sm md:text-base font-medium tracking-wide text-textMuted">
            <Link href="/about" className="text-textPrimary hover:text-opacity-80 font-sans transition-colors duration-200 text-xl font-bold">About</Link>
            <Link href="/blog" className="text-textPrimary transition-colors duration-200 text-xl font-bold">Blog</Link>
            <Link href="/my-office" className="text-textPrimary hover:text-opacity-80 font-sans transition-colors duration-200 text-xl font-bold">My Office</Link>
            <Link href="/contact" className="text-textPrimary hover:text-opacity-80 font-sans transition-colors duration-200 text-xl font-bold">Contact</Link>
          </div>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className={` inset-0 w-full h-screen bg-bgSection z-40 flex flex-col items-center justify-center space-y-8 translate-x-full opacity-0`}
        style={{ display: 'none' }}
      >
        <Link href="/" className="menu-item text-5xl font-serif text-textPrimary hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" className="menu-item text-5xl font-serif text-textPrimary hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/blog" className="menu-item text-5xl font-serif text-textPrimary hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link href="/my-office" className="menu-item text-5xl font-serif text-textPrimary hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>My Office</Link>
        <Link href="/contact" className="menu-item text-5xl font-serif text-textPrimary hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

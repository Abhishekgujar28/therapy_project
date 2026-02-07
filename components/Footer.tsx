'use client';
import Link from "next/link";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={footerRef} className="w-full bg-footerBg text-footerText">
      {/* Top Section */}
      <div className="max-w-full mx-auto px-6 lg:px-12 pt-12 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Left: Brand & Contact */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-5xl leading-tight font-serif font-medium text-footerText">
            Dr. Maya Reynolds
            </h2>

            <div className="space-y-2 text-xl text-footerText font-medium">
              <p>123th Street 45 W, 1</p>
              <p>Santa Monica, CA 9040</p>
            </div>

            <div className="space-y-2 text-xl text-footerText underline underline-offset-4 font-medium">
              <a href="mailto:maya.reynolds@example.com">maya.reynolds@example.com</a>
              <br />
              <a href="tel:5555555555">(555) 555-5555</a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-8 md:ml-38">
            <h4 className=" font-serif text-5xl text-footerText">
              Hours
            </h4>
            <div className="text-xl text-footerText space-y-2">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Find */}
          <div className="space-y-8 md:ml-44">
            <h4 className="text-5xl md:ml-10 font-serif font-medium text-footerText">
              Find
            </h4>
            <div className="flex flex-col items-start md:items-end space-y-2 text-xl underline underline-offset-4 text-footerText">
              <Link href="/" className="text-footerText hover:text-primarySoft transition-colors">Home</Link>
              <Link href="/contact" className="text-footerText hover:text-primarySoft transition-colors">Contact</Link>
              <Link href="/blog" className="text-footerText hover:text-primarySoft transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-footerBg border-t border-textMuted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 text-center space-y-6">
          
          <div className="flex flex-wrap justify-center gap-6 text-sm underline underline-offset-4 text-footerText">
            <Link className="text-footerText hover:text-primarySoft transition-colors" href="#">Privacy & Cookies Policy</Link>
            <Link className="text-footerText hover:text-primarySoft transition-colors" href="#">Good Faith Estimate</Link>
            <Link className="text-footerText hover:text-primarySoft transition-colors" href="#">Website Terms & Conditions</Link>
            <Link className="text-footerText hover:text-primarySoft transition-colors" href="#">Disclaimer</Link>
          </div>

          

          <p className="text-sm text-footerText">
            All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MyOffice = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
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
    }, "-=0.5")
    .from(mapRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .from(imagesRef.current?.children || [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-bgMain min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="mb-16 text-center md:text-left">
          <h1 ref={titleRef} className="text-5xl md:text-6xl font-serif text-textPrimary mb-8">
            My Office Space
          </h1>
          <div ref={textRef} className="text-lg md:text-xl text-textBody max-w-3xl leading-relaxed space-y-4">
            <p>
              Welcome to a space designed for healing and growth. My office is located in the heart of Minneapolis, 
              offering a calm and confidential environment where you can feel safe to explore your thoughts and feelings.
            </p>
            <p>
              Whether you are coming in for a consultation or a regular session, I strive to make every visit comfortable 
              and welcoming. Below you can find the exact location and some glimpses of the interior.
            </p>
          </div>
        </div>

        {/* Live Location (Map) */}
        <div ref={mapRef} className="mb-24">
           <h2 className="text-3xl font-serif text-textPrimary mb-8">Location</h2>
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-textPrimary mb-2">Address</h3>
                    <p className="text-textBody">123 Example Street<br/>Minneapolis, MN</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-textPrimary mb-2">Hours</h3>
                    <p className="text-textBody">Monday – Friday<br/>10am – 6pm</p>
                  </div>
              </div>
              <div className="w-full md:w-2/3">
                 <LeafletMapPane />
              </div>
           </div>
        </div>

        {/* Images Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif text-textPrimary mb-8">Gallery</h2>
          <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/office1.jpeg" 
                alt="Office Interior 1" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/office2.jpeg" 
                alt="Office Interior 2" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function LeafletMapPane() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current) return;
      
      // Check if map is already initialized
      if ((mapRef.current as any)._leaflet_id) return;

      const map = L.map(mapRef.current, {
        center: [44.9778, -93.2650],
        zoom: 12,
        zoomControl: true,
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 19,
      }).addTo(map);
      L.marker([44.9778, -93.2650]).addTo(map);
    };

    const onLoad = () => init();
    
    // If Leaflet is already loaded
    if ((window as any).L) {
        init();
    } else {
        window.addEventListener('leaflet-loaded', onLoad);
    }
    
    return () => window.removeEventListener('leaflet-loaded', onLoad);
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
        onLoad={() => {
          const event = new Event('leaflet-loaded');
          window.dispatchEvent(event);
        }}
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div
        ref={mapRef}
        className="relative w-full h-[400px] rounded-lg overflow-hidden grayscale contrast-[0.9] opacity-90 border border-textMuted/20"
      />
    </>
  );
}

export default MyOffice;

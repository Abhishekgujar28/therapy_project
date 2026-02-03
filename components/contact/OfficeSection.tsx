"use client";
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const OfficeSection = () => {
  return (
    <section className="bg-[#7e7b46] w-full">
      <div className="flex flex-col md:flex-row min-h-[500px] items-stretch">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <div className="mb-12">
            <h3 className="text-5xl font-medium mb-4 text-white">My Office</h3>
            <p className="text-white leading-relaxed text-lg">123 Example Street<br/>Minneapolis, MN</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium mb-4 text-white">Hours</h3>
            <p className="text-white leading-relaxed text-lg">Monday – Friday<br/>10am – 6pm</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:min-h-[50px] p-6 md:p-10">
          <LeafletMapPane />
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;

function LeafletMapPane() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current) return;
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
    window.addEventListener('leaflet-loaded', onLoad);
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
        className="relative w-full h-[400px] md:h-[520px] rounded-lg overflow-hidden grayscale contrast-[0.9] opacity-90"
      />
    </>
  );
}

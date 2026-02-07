
'use client';

import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import FulfillingLife from "@/components/home/FulfillingLife";

const Specialties = dynamic(() => import("@/components/home/Specialties"), {
  ssr: false,
});
const NotAlone = dynamic(() => import("@/components/home/NotAlone"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/home/About"), {
  ssr: false,
});
const FAQ = dynamic(() => import("@/components/home/FAQ"), {
  ssr: false,
});
const ProfessionalBackground = dynamic(
  () => import("@/components/home/ProfessionalBackground"),
  {
    ssr: false,
  }
);
const CTA = dynamic(() => import("@/components/home/CTA"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col bg-bgMain">
      <Hero />
      <FulfillingLife />
      <Specialties />
      <NotAlone />
      <About />
      <FAQ />
      <ProfessionalBackground />
      <CTA />
       
    </main>
  );
}

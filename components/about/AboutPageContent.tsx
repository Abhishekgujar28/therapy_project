'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPageContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.animate-section');
    
    sections.forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-bgMain min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-bgSoft animate-section">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-textPrimary mb-6 leading-tight">
            Trauma & Anxiety Therapist in Santa Monica
          </h1>
          <p className="text-lg md:text-xl text-textBody leading-relaxed max-w-2xl mx-auto">
            Helping high-achieving adults find calm, clarity, and connection.
          </p>
        </div>
      </section>

      <div ref={sectionsRef} className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-20">
        
        {/* About Section */}
        <section className="animate-section">
          <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">About Dr. Maya Reynolds</h2>
          <div className="prose prose-lg text-textBody leading-relaxed">
            <p className="mb-4">
              I am a **Psychologist in Santa Monica** dedicated to helping you find balance in a busy world. 
              My practice is built on a warm, collaborative approach where your experiences are heard, validated, and understood.
            </p>
            <p>
              I specialize in working with high-achieving adults who feel constantly overwhelmed, burned out, or anxious despite their outward success. 
              Together, we will work to understand the root of your struggles and build a path toward a more fulfilling, sustainable life.
            </p>
          </div>
        </section>

        {/* Anxiety Therapy Section */}
        <section className="animate-section">
          <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">Anxiety Therapy</h2>
          <div className="prose prose-lg text-textBody leading-relaxed">
            <p className="mb-4">
              Living with anxiety can feel exhausting, like you're constantly running on a treadmill that never stops. 
              As a specialist in **Anxiety therapy Santa Monica**, I provide a safe space to pause and breathe.
            </p>
            <p>
              We will work together to identify triggers, challenge unhelpful thought patterns, and develop practical tools to calm your nervous system. 
              My goal is to help you reduce overthinking and feel more grounded in your daily life.
            </p>
          </div>
        </section>

        {/* Trauma & EMDR Section */}
        <section className="animate-section">
          <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">Trauma & EMDR</h2>
          <div className="prose prose-lg text-textBody leading-relaxed">
            <p className="mb-4">
              Healing from trauma is possible, and you don't have to do it alone. 
              I am an experienced **Trauma therapist in Santa Monica** utilizing evidence-based approaches to help you process past experiences.
            </p>
            <p>
              I am also an **EMDR therapist in California**, offering Eye Movement Desensitization and Reprocessing (EMDR). 
              This powerful, research-backed therapy helps the brain process traumatic memories, reducing their lingering emotional charge and restoring a sense of safety and control.
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="animate-section grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">My Approach</h2>
            <p className="text-textBody text-lg leading-relaxed mb-4">
              I believe in a holistic approach to healing that addresses the whole person—mind, body, and spirit.
            </p>
            <ul className="space-y-3 text-textBody">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Cognitive Behavioral Therapy (CBT)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>EMDR & Trauma-Informed Care</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Mindfulness-Based Strategies</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Body-Based / Somatic Approaches</span>
              </li>
            </ul>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-bgAccent">
             <img src="https://i.pinimg.com/736x/ec/c7/76/ecc7766ee45fb6c06e5eb6ac878e5f3b.jpg" alt="Calm nature" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* In-Person & Online Section */}
        <section className="animate-section">
          <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">In-Person & Online</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-textPrimary/10 ">
              <h3 className="text-xl font-bold text-textPrimary mb-4">In-Person Therapy</h3>
              <p className="text-textBody leading-relaxed">
                I offer **in-person therapy in Santa Monica** in a calm, private office designed for your comfort. 
                It's a sanctuary where you can step away from the noise of the world.
              </p>
            </div>
            <div className="bg-white p-8 border border-textPrimary/10">
              <h3 className="text-xl font-bold text-textPrimary mb-4">Online Therapy</h3>
              <p className="text-textBody leading-relaxed">
                For those across the state who need more flexibility, I provide secure and effective **online therapy in California**. 
                Connect from the comfort of your own home or office.
              </p>
            </div>
          </div>
        </section>

        {/* Who I Work With Section */}
        <section className="animate-section">
          <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">Who I Work With</h2>
          <p className="text-lg text-textBody leading-relaxed">
            I work with adults who are high-functioning on the outside but struggling on the inside. 
            Whether you are dealing with perfectionism, career burnout, relationship stress, or unresolved trauma, 
            we can work together to help you find your footing again.
          </p>
        </section>

        {/* Call to Action */}
        <section className="animate-section text-center py-12 bg-bgAccent/30 rounded-lg mt-12">
          <h2 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6">Ready to Reclaim Your Calm?</h2>
          <p className="text-lg text-textBody mb-8 max-w-xl mx-auto">
            You don't have to carry the weight of everything alone. If you are ready to start feeling better, let's connect.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
            Book a Free Consultation
          </Link>
        </section>

      </div>
    </div>
  );
};

export default AboutPageContent;

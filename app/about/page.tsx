import React from "react";
import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Trauma & Anxiety Therapist Santa Monica | Dr. Maya Reynolds",
  description: "Dr. Maya Reynolds offers anxiety therapy, EMDR, and trauma counseling in Santa Monica & online in California. Reclaim your calm and overcome burnout today.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageContent />
    </main>
  );
}

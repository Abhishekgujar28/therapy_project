import React from "react";
import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Dr. Maya Reynolds | Therapist Santa Monica",
  description: "Learn more about Dr. Maya Reynolds, a compassionate Therapist Santa Monica specializing in anxiety, trauma, and helping you find your path to healing.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageContent />
    </main>
  );
}

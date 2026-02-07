import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Maya Reynolds | Psychologist Minneapolis | Anxiety, Trauma & Burnout Therapy",
    template: "%s | Dr. Maya Reynolds",
  },
  description: "Licensed Clinical Psychologist in Minneapolis offering therapy for anxiety, panic, trauma, and burnout. Integrating CBT, EMDR, and mindfulness for high-achieving adults.",
  keywords: ["Psychologist Minneapolis", "Anxiety Therapy Minneapolis", "Trauma Therapy Minneapolis", "Burnout Therapy", "CBT", "EMDR", "Mindfulness", "Dr. Maya Reynolds", "Clinical Psychologist"],
  openGraph: {
    title: "Dr. Maya Reynolds | Psychologist Minneapolis | Anxiety, Trauma & Burnout Therapy",
    description: "Licensed Clinical Psychologist in Minneapolis offering therapy for anxiety, panic, trauma, and burnout. Integrating CBT, EMDR, and mindfulness for high-achieving adults.",
    url: "https://www.drmayareynolds.com", // Replace with actual domain
    siteName: "Dr. Maya Reynolds Therapy",
    images: [
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070", // Using one of the office images as default OG image
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds Therapy Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-bgMain text-textBody`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

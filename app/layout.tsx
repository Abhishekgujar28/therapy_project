import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, Lato, Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gopher = localFont({
  src: [
    {
      path: "./fonts/Gopher-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gopher-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gopher",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lilac Template",
  description: "Therapy for Adults in Minneapolis, MN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

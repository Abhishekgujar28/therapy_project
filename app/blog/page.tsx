import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/Footer";
import BlogSubcribe from "@/components/blog/BlogSubscribe";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog | Insights on Healing & Growth",
  description: "Read Dr. Maya Reynolds' latest thoughts on mental health, anxiety tips, self-care strategies, and the journey to emotional wellness.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bgMain">
       
      <BlogHero />
      <BlogGrid />
      <BlogSubcribe />
     
    </main>
  );
}

import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/Footer";
import BlogSubcribe from "@/components/blog/BlogSubcribe";

export const dynamic = "force-static";

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bgMain">
       
      <BlogHero />
      <BlogGrid />
      <BlogSubcribe />
     
    </main>
  );
}

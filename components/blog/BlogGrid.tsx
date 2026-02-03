import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/blogData";

const BlogGrid = () => {
  return (
    <section className="bg-[#e5e0da]">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-18 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

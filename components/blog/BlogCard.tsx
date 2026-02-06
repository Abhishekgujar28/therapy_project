import React from "react";
import Link from "next/link";
import { Blog } from "@/lib/blogData";

type Props = {
  post: Blog;
};

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-transparent"
    >
      <div className="relative w-full h-64 md:h-[450px] overflow-hidden rounded-sm">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="px-0 py-6">
        <div className="text-xs font-bold tracking-widest uppercase mb-3 text-textMuted/80">{post.date}</div>
        <h3 className="text-3xl md:text-4xl font-serif font-medium mb-3 text-textPrimary leading-tight group-hover:text-primary transition-colors duration-300">{post.title}</h3>
        <div className="flex items-center gap-2 mt-4 text-textPrimary font-medium text-sm tracking-widest uppercase">
           <span className="border-b border-primary/50 group-hover:border-primary transition-colors">Read Post</span>
           <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

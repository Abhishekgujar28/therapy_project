import React from "react";
import { Blog } from "@/lib/blogData";

type Props = {
  post: Blog;
};

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <a
      href={`/blog/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-]"
    >
      <div className="relative w-full h-64 md:h-[450px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300  "
        />
      </div>
      <div className="px-0 py-5">
        <div className="text-base opacity-70 mb-2">{post.date}</div>
        <h3 className="text-4xl font-medium mb-2">{post.title}</h3>
        <span className="text-lg mt-8 underline">Read More</span>
      </div>
    </a>
  );
};

export default BlogCard;

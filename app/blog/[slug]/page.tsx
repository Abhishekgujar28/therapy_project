import React from "react";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find next post for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main className="min-h-screen flex flex-col bg-[#e5e0da]">
      <div className="pt-18 pb-20 px-6 max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 opacity-60">
            {post.date}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-[#2d3e34] mb-8">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-xl text-[23px] max-w-none text-[#2d3e34] opacity-80 whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-20 border-t border-black pt-10 flex justify-end">
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-end text-xl md:text-4xl font-medium text-[#2d3e34] hover:opacity-70 transition-opacity"
            >
              {nextPost.title}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

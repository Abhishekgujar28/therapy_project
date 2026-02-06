import React from "react";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";

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
    <main className="min-h-screen flex flex-col bg-bgMain">
      <BlogPostView post={post} nextPost={nextPost} />
    </main>
  );
}

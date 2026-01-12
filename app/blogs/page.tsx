"use client";

import Link from "next/link";
import FloatingNav from "@/components/FloatingNav";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Why I Transitioned from Machine Learning to Smart Contract Engineering",
    excerpt: "From admiring Bitcoin in 2017, to learning from developers in a local crypto community, to winning hackathons and working professionally in Web3, this journey has shaped how I approach engineering today.",
    date: "2025-01-12",
    readTime: "6 min read",
    tags: ["Career", "Web3", "Machine Learning"],
    slug: "ml-to-smart-contract-engineering",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <FloatingNav />
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Blogs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Thoughts on smart contract development, security, and the journey from AI/ML to Web3.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10"
              >
                <div className="flex flex-col gap-4">
                  {/* Date and read time */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm border border-gray-800 text-gray-400 hover:border-gray-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <div className="mt-2">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                    >
                      Read full article
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

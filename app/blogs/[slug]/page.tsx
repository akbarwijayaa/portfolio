"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import FloatingNav from "@/components/FloatingNav";

const blogPosts = [
  {
    id: 1,
    title: "Why I Transitioned from Machine Learning to Smart Contract Engineering",
    excerpt: "From admiring Bitcoin in 2017, to learning from developers in a local crypto community, to winning hackathons and working professionally in Web3, this journey has shaped how I approach engineering today.",
    content: `
      <p>I have been fascinated by Bitcoin since 2017.</p>

      <p>At that time, my understanding of the technology was still limited. However, the idea of a decentralized system that could operate without centralized control deeply resonated with me. Bitcoin was not merely a digital currency. It represented a new way to think about trust, ownership, and coordination at a global scale.</p>

      <p>That fascination stayed with me for years.</p>

      <h3>From Curiosity to Commitment</h3>

      <p>While working professionally as a Machine Learning Developer, I gradually became more active in the local crypto community in Yogyakarta. Through regular meetups and discussions, I met several smart contract developers who were building real products in Web3. They were not focused on speculation, but on designing protocols, writing immutable logic, and thinking seriously about security and incentives.</p>

      <p>One particular interaction became a turning point.</p>

      <p>A smart contract developer I met shared his learning path with me. He explained what concepts truly mattered, which tools were essential, and how to approach smart contract engineering with the right mindset. For the first time, my long standing curiosity about blockchain had a clear and structured direction.</p>

      <p>From that point on, I began learning Solidity in a more disciplined way. I focused on understanding how smart contracts behave under real constraints, such as gas efficiency, immutability, adversarial environments, and financial risk.</p>

      <h3>Why I Left Machine Learning</h3>

      <p>Machine learning trained me to think analytically, reason about complex systems, and evaluate trade offs carefully. However, over time, I realized that I was increasingly drawn to systems where code directly controls value and where mistakes have immediate and tangible consequences.</p>

      <p>Smart contract engineering requires a level of precision and responsibility that I found deeply motivating. Every design decision matters, and every line of code represents a commitment that cannot easily be reversed.</p>

      <p>This clarity and accountability were what ultimately convinced me to make the transition.</p>

      <h3>Learning Through Building and Competition</h3>

      <p>I followed the learning path I was given with consistency and intent. I spent time studying Solidity fundamentals, EVM behavior, smart contract security patterns, and modern testing methodologies. I also analyzed real DeFi protocols to understand how production systems are designed and maintained.</p>

      <p>Hackathons played a major role in accelerating my growth.</p>

      <p>By participating in multiple Web3 hackathons, I learned how to build under pressure, make architectural decisions quickly, and collaborate effectively with people from different backgrounds. These experiences forced me to balance speed with safety, which is a critical skill in smart contract development.</p>

      <p>Winning several hackathons was a strong validation of my progress and confirmed that I was ready to work on real world Web3 systems.</p>

      <h3>Becoming a Smart Contract Engineer</h3>

      <p>Eventually, this learning journey turned into a professional transition.</p>

      <p>I began working in Web3 as a Smart Contract Developer, contributing to decentralized finance protocols and blockchain based systems. My focus shifted from building predictive models to designing trust minimized financial infrastructure.</p>

      <p>Interestingly, my background in machine learning remained highly relevant. The analytical mindset helped me reason about protocol risks and edge cases. My experience with validation and testing translated naturally into smart contract testing and security reviews. Systems thinking became even more important when dealing with composable DeFi protocols.</p>

      <h3>Looking Back</h3>

      <p>This transition was not about abandoning machine learning.</p>

      <p>It was about following a belief in decentralized systems that began years earlier, finding the right community, and committing fully once the path became clear.</p>

      <p>From admiring Bitcoin in 2017, to learning from developers in a local crypto community, to winning hackathons and working professionally in Web3, this journey has shaped how I approach engineering today.</p>

      <p>I do not just write code.<br>I design systems that people trust with real value.</p>
    `,
    date: "2025-01-12",
    readTime: "6 min read",
    tags: ["Career", "Web3", "Machine Learning"],
    slug: "ml-to-smart-contract-engineering",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-20">
        <FloatingNav />
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link href="/blogs" className="text-purple-400 hover:text-purple-300">
            ← Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <FloatingNav />
      {/* Back button */}
      <div className="border-b border-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to blogs
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-gray-800 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related posts or CTA section could go here */}
      <div className="border-t border-gray-900 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Want to discuss this post?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>

      {/* Add custom styles for prose */}
      <style jsx global>{`
        .prose h3 {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h4 {
          color: #e5e5e5;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          color: #a1a1a1;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
        .prose strong {
          color: #ffffff;
          font-weight: 600;
        }
        .prose ul {
          list-style: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: #a1a1a1;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose a {
          color: #a78bfa;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #c4b5fd;
        }
      `}</style>
    </main>
  );
}

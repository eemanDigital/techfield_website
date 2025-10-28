"use client";
import { useState } from "react";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import HeaderText from "../component/HeaderText";
import ArticleCard from "../component/ArticleCard";

// Modern geometric background component
function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(153,1,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(153,1,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-[#990100]/5 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-20 left-8 w-20 h-20 bg-[#990100]/3 rounded-xl -rotate-6"></div>
    </div>
  );
}

export default function BlogPage({ blogPosts }) {
  // const [searchQuery, setSearchQuery] = useState("");

  // Show only 3 featured posts
  const featuredPosts = blogPosts?.filter((post) => post.featured).slice(0, 3);
  const latestPosts = blogPosts?.slice(0, 3); // Fallback if no featured posts

  const postsToShow = featuredPosts?.length > 0 ? featuredPosts : latestPosts;

  return (
    <div className="min-h-screen bg-white relative">
      <GeometricBackground />

      {/* Hero Section */}
      <div className="relative border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#990100]/5 rounded-full border border-[#990100]/10">
              <Sparkles className="w-4 h-4 text-[#990100]" />
              <span className="text-sm font-medium text-[#990100]">
                Latest Insights
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center">
            <HeaderText textOne="Techfield" textTwo="Blog" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Expert perspectives on technology law and the evolving digital
              landscape
            </p>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#990100]"></div>
            <TrendingUp className="w-5 h-5 text-[#990100]" />
            <div className="w-6 h-px bg-[#990100]"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Analysis
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Selected insights on current legal technology trends
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {postsToShow?.map((post, index) => (
            <ArticleCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-600">
              Want to explore more insights and analysis?
            </p>
            <button
              onClick={() => (window.location.href = "/blog/all-news")}
              className="px-8 py-3 bg-[#990100] text-white rounded-lg font-semibold hover:bg-[#990100]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Legal Tech
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Get the latest insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#990100] focus:ring-1 focus:ring-[#990100]"
            />
            <button className="px-6 py-3 bg-[#990100] text-white rounded-lg font-semibold hover:bg-[#990100]/90 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

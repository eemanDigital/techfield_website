"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Search,
  Filter,
  Plus,
} from "lucide-react";

const categories = [
  "All",
  "Blockchain",
  "AI & Technology",
  "Smart Contracts",
  "Data Protection",
  "Venture Capital",
  "Intellectual Property",
];

export default function BlogPage({ blogPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6); // Show 6 posts initially

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const postsToShow = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/90">
              Insights & Updates
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Legal Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Insights
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Expert perspectives on technology law, innovation, and the evolving
            digital landscape
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">
                Featured Articles
              </h2>
            </div>
            <span className="text-sm text-white/40">
              {featuredPosts.length} featured
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <button
                key={post.slug}
                onClick={() => (window.location.href = `/blog/${post.slug}`)}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}>
                <div
                  className={`relative ${
                    index === 0 ? "h-[600px]" : "h-[290px]"
                  } overflow-hidden`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-cyan-500/90 backdrop-blur-sm mb-4">
                      <span className="text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>

                    <h3
                      className={`font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors ${
                        index === 0 ? "text-3xl md:text-4xl" : "text-xl"
                      }`}>
                      {post.title}
                    </h3>

                    {index === 0 && (
                      <p className="text-white/80 text-lg mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="border-y border-white/10 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <Filter className="w-5 h-5 text-white/40 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisiblePosts(6); // Reset visible posts when category changes
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}>
                  {category}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm text-white/40">
              <span>
                Showing {postsToShow.length} of {filteredPosts.length} articles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
          <span className="text-sm text-white/40">
            {filteredPosts.length} total articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
            <button
              key={post.slug}
              onClick={() => (window.location.href = `/blog/${post.slug}`)}
              className="group text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-white/60 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 text-white/50 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMorePosts}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
              <Plus className="w-5 h-5" />
              Load More Articles
              <span className="text-sm text-cyan-300/60">
                ({filteredPosts.length - visiblePosts} remaining)
              </span>
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-white/40">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* View All Articles CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to explore all our articles?
          </h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Browse our complete collection of legal tech insights and industry
            analysis.
          </p>
          <button
            onClick={() => (window.location.href = "/blog/all-news")}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
            View All News Articles
          </button>
        </div>
      </div>
    </div>
  );
}

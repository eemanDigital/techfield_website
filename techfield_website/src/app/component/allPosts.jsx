"use client";

import { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List,
  SortAsc,
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

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
];

// const blogPosts = getAllPosts();

export default function AllNews({ blogPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts?.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });

    // Sort posts
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "popular":
          return (b.views || 0) - (a.views || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [blogPosts, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              All News & Articles
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Complete archive of our legal tech insights, analysis, and
              industry updates
            </p>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-0 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <Filter className="w-4 h-4 text-white/40 flex-shrink-0" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}>
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center gap-2 ml-auto">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors">
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <SortAsc className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-white/40 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-cyan-500 text-white"
                        : "text-white/60 hover:text-white"
                    }`}>
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-cyan-500 text-white"
                        : "text-white/60 hover:text-white"
                    }`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-sm">
            Showing {filteredAndSortedPosts?.length} of {blogPosts?.length}{" "}
            articles
          </p>
          <div className="text-right">
            <p className="text-white/60 text-sm">
              Sorted by:{" "}
              {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts?.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAndSortedPosts?.map((post) => (
              <ArticleListItem key={post.slug} post={post} />
            ))}
          </div>
        )}

        {filteredAndSortedPosts?.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No articles found
              </h3>
              <p className="text-white/60">
                Try adjusting your search or filter criteria to find what you're
                looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Grid Card Component
function ArticleCard({ post }) {
  return (
    <button
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
                year: "numeric",
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
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/5 text-white/50 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}

// List Item Component
function ArticleListItem({ post }) {
  return (
    <button
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
      className="group w-full text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 lg:w-64 h-48 md:h-auto relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
            {post.category}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-sm text-white/40">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
                {post.views && (
                  <span className="text-white/40">
                    {post.views.toLocaleString()} views
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/5 text-white/50 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

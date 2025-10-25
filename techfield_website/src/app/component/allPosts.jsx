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
  BookOpen,
  Eye,
} from "lucide-react";
import ElegantBackground from "./ElegantBackground";
import Header from "./header";
import HeaderText from "./HeaderText";

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

// function ElegantBackground() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100/80"></div>

//       {/* Geometric pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(30deg,transparent_0%,transparent_70%,#990100_70%,#990100_72%,transparent_72%,transparent_100%),linear-gradient(150deg,transparent_0%,transparent_70%,#990100_70%,#990100_72%,transparent_72%,transparent_100%)] bg-[size:60px_60px]"></div>
//       </div>

//       {/* Accent shapes */}
//       <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#990100]/5 to-transparent rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#990100]/3 to-transparent rounded-full blur-3xl"></div>
//     </div>
//   );
// }

// Grid Card Component
function ArticleCard({ post }) {
  return (
    <div
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#990100]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#990100]/5">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#990100] rounded-full text-xs font-semibold text-white shadow-lg">
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#990100] transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-500">
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

          <div className="flex items-center gap-1 text-sm font-medium text-[#990100] group-hover:gap-2 transition-all">
            <span>Read</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// List Item Component
function ArticleListItem({ post }) {
  return (
    <div
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#990100]/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 lg:w-64 h-48 md:h-auto relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#990100] rounded-full text-xs font-semibold text-white shadow-lg">
            {post.category}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#990100] transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500">
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
                  <span className="flex items-center gap-1 text-gray-500">
                    <Eye className="w-4 h-4" />
                    {post.views.toLocaleString()} views
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-[#990100] group-hover:gap-2 transition-all">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AllNews({ blogPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

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
    <div className="min-h-screen bg-white relative overflow-hidden mt-20">
      <ElegantBackground />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#990100]/5 rounded-full border border-[#990100]/10 mb-6">
                <BookOpen className="w-4 h-4 text-[#990100]" />
                <span className="text-sm font-medium text-[#990100]">
                  LEGAL INSIGHTS
                </span>
              </div>

              <HeaderText textOne="Techfield" textTwo="Blog" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Complete archive of our legal technology insights, analysis, and
                industry expertise
              </p>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-xl border-b border-gray-200 z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search legal insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#990100] focus:ring-1 focus:ring-[#990100] transition-colors text-sm"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                {/* Categories */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
                  <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-[#990100] text-white shadow-lg shadow-[#990100]/30"
                          : "bg-white text-gray-600 border border-gray-300 hover:border-[#990100] hover:text-[#990100]"
                      }`}>
                      {category}
                    </button>
                  ))}
                </div>

                {/* Sort and View Controls */}
                <div className="flex items-center gap-3 ml-auto">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-[#990100] focus:ring-1 focus:ring-[#990100] transition-colors">
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <SortAsc className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center bg-white border border-gray-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-[#990100] text-white shadow-sm"
                          : "text-gray-400 hover:text-gray-600"
                      }`}>
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-[#990100] text-white shadow-sm"
                          : "text-gray-400 hover:text-gray-600"
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">
              Showing {filteredAndSortedPosts?.length || 0} of{" "}
              {blogPosts?.length || 0} articles
            </p>
            <div className="text-right">
              <p className="text-gray-600 text-sm">
                Sorted by:{" "}
                <span className="font-medium text-gray-900">
                  {sortOptions.find((opt) => opt.value === sortBy)?.label}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid/List */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  No articles found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or browse different
                  categories to find relevant insights.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

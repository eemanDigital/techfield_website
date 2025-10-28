import { ArrowRight, Calendar, Clock } from "lucide-react";

// Clean article card component
export default function ArticleCard({ post, index }) {
  return (
    <div
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-200 hover:border-[#990100]/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
      style={{
        animationDelay: `${index * 150}ms`,
      }}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
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

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#990100] transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read More CTA */}
        <div className="flex items-center gap-2 text-[#990100] font-medium text-sm group-hover:gap-3 transition-all duration-300">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

import { Calendar, Clock } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 rounded-full text-xs font-semibold text-white">
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-white/60 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-white/40">
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
      </div>
    </Link>
  );
}

import { getAllPosts } from "@/lib/allPost";
import BlogCard from "../component/blogCard";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">
          Insights & Updates
        </h1>
        <p className="text-xl text-white/60 mb-12">
          Legal perspectives on technology, innovation, and digital
          transformation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

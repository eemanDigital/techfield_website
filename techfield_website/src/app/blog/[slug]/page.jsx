import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc"; // ✅ use /rsc for App Router
import Image from "next/image";
import { getPostBySlug } from "@/lib/postBySlug";
import { getAllPosts } from "@/lib/allPost";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  console.log("SLUG", slug);

  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/60">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-white/70 text-justify prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

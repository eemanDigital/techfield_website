import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export function getPostBySlug(slug) {
  const postDirectory = path.join(process.cwd(), "content/blog");

  try {
    const fullPath = path.join(postDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
      image: data.image,
      tags: data.tags || [],
      content,
      readingTime: stats.text,
    };
  } catch {
    return null;
  }
}

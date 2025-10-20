import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Get all blog posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  console.log(fileNames);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
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
    });

  // Sort by date (newest first)
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get posts by category
export function getPostsByCategory(category) {
  const allPosts = getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get featured posts (latest 3)
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.slice(0, 3);
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        ...data,
        tags: data.tags ?? [],
        readingTime: getReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
  const filepath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) {
    return null;
  }
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, meta: data, content };
}

export function getAdjacentPosts(slug) {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}

export function getAllTags() {
  return [...new Set(getAllPosts().flatMap((post) => post.tags))].sort();
}

export function getPostsByTag(tag) {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

import fs from "fs";
import path from "path";

import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const isDev = process.env.NODE_ENV === "development";

export function getAllPosts() {
  if (!isDev) return [];
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
  const filepath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, meta: data, content };
}

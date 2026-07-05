import fs from "fs";
import path from "path";
import { Feed } from "feed";
import { getAllPosts } from "./blog.js";
import { AUTHOR, BASE_URL } from "./metadata.js";

export function generateRSS() {
  const posts = getAllPosts();

  const feed = new Feed({
    title: AUTHOR,
    description: "Latest blog posts",
    id: BASE_URL,
    link: BASE_URL,
    language: "en",
    copyright: `© ${AUTHOR}, ${new Date().getFullYear()}.`,
    author: { name: AUTHOR, link: BASE_URL },
    feedLinks: { rss: `${BASE_URL}/rss.xml` },
    generator: false,
  });

  for (const post of posts) {
    const url = `${BASE_URL}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description || "",
      date: new Date(post.date),
    });
  }

  fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), feed.rss2());
}

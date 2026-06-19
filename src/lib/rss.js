import fs from "fs";
import path from "path";
import { getAllPosts } from "./blog.js";

const SITE_URL = "https://milos.fyi";

export function generateRSS() {
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Miloš Milanović</title>
    <link>${SITE_URL}</link>
    <description>Latest blog posts</description>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ""}]]></description>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`.trim();

  fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), rss);
}

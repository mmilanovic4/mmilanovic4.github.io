import fs from "fs";
import path from "path";
import { getAllPosts } from "./blog.js";
import { AUTHOR, BASE_URL } from "./metadata.js";

export function generateRSS() {
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${AUTHOR}</title>
    <link>${BASE_URL}</link>
    <description>Latest blog posts</description>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ""}]]></description>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`.trim();

  fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), rss);
}

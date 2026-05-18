import fs from "fs";
import path from "path";
import { getAllPosts } from "./blog.js";

export function generateRSS() {
  const posts = getAllPosts();

  const siteUrl = "https://mmilanovic4.github.io";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Miloš Milanović</title>
    <link>${siteUrl}</link>
    <description>Latest blog posts</description>

    ${posts
      .map(
        (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <guid>${siteUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.description || ""}]]></description>
      </item>
    `,
      )
      .join("")}

  </channel>
</rss>`;

  fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), rss);
}

generateRSS();

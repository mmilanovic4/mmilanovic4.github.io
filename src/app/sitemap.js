import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://milos.fyi/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://milos.fyi",
      lastModified: new Date(),
    },
    {
      url: "https://milos.fyi/resume",
      lastModified: new Date(),
    },
    {
      url: "https://milos.fyi/projects",
      lastModified: new Date(),
    },
    {
      url: "https://milos.fyi/blog",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}

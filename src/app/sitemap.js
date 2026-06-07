import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://mmilanovic4.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://mmilanovic4.dev",
      lastModified: new Date(),
    },
    {
      url: "https://mmilanovic4.dev/resume",
      lastModified: new Date(),
    },
    {
      url: "https://mmilanovic4.dev/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mmilanovic4.dev/blog",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}

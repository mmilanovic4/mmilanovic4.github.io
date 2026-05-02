import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://mmilanovic4.github.io/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://mmilanovic4.github.io",
      lastModified: new Date(),
    },
    {
      url: "https://mmilanovic4.github.io/resume",
      lastModified: new Date(),
    },
    {
      url: "https://mmilanovic4.github.io/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mmilanovic4.github.io/blog",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}

import { getAllPosts, getAllTags, getPostsByTag } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  // A tag page changes when a post joins it, so its newest post dates it.
  const tagUrls = getAllTags().map((tag) => ({
    url: `${BASE_URL}/blog/tags/${tag}`,
    lastModified: new Date(getPostsByTag(tag)[0].date),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/uses`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...tagUrls,
    ...blogUrls,
  ];
}

import Link from "next/link";
import { Container } from "@/components";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Miloš Milanović | Blog",
  description: "Thoughts.",
  openGraph: {
    url: "https://mmilanovic4.github.io/blog",
  },
});

export default function Blog() {
  const posts = getAllPosts();
  return (
    <Container>
      <p className="text-accent mb-6 text-xs"># blog</p>
      {posts.length === 0 ? (
        <p className="text-muted text-sm">Coming soon.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="flex flex-col gap-1 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-800"
            >
              <time className="text-muted text-xs">{post.date}</time>
              <Link
                href={`/blog/${post.slug}`}
                className="text-accent text-sm hover:underline"
              >
                {post.title}
              </Link>
              {post.description && (
                <p className="text-muted text-xs">{post.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

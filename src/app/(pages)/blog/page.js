import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

const isDev = process.env.NODE_ENV === "development";

export const metadata = { title: "Miloš Milanović | Blog" };

export default function Blog() {
  const posts = isDev ? getAllPosts() : [];
  return (
    <div className="mx-auto mt-8 w-full max-w-full px-4 md:w-125 md:px-0">
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
    </div>
  );
}

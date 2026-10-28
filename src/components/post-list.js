import Link from "next/link";
import { TagList } from "@/components";
import { formatDate } from "@/lib/date";

export function PostList({ posts }) {
  return (
    <ul className="flex flex-col gap-2">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="flex flex-col gap-1 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700"
        >
          <span className="text-muted text-xs md:text-sm lg:text-base">
            {formatDate(post.date)} · {post.readingTime} min read
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-accent text-sm hover:underline md:text-base lg:text-lg"
          >
            {post.title}
          </Link>
          {post.description && (
            <p className="text-muted text-xs md:text-sm lg:text-base">
              {post.description}
            </p>
          )}
          <TagList tags={post.tags} className="mt-1" />
        </li>
      ))}
    </ul>
  );
}

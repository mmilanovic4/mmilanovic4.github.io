import Link from "next/link";

function PostNavLink({ label, rel, post }) {
  return (
    <div>
      <p className="text-accent mb-3 text-xs"># {label}</p>
      <Link
        href={`/blog/${post.slug}`}
        rel={rel}
        className="text-accent text-sm hover:underline md:text-base lg:text-lg"
      >
        {post.title}
      </Link>
    </div>
  );
}

// The older post first, the newer one under it, at every width: one under
// the other reads like the rest of the site, which is a single column.
export function PostNav({ prev, next }) {
  if (!prev && !next) {
    return null;
  }
  return (
    <nav
      aria-label="More posts"
      className="mt-8 grid gap-6 border-t border-gray-200 pt-6 dark:border-gray-700"
    >
      {prev && <PostNavLink label="previous" rel="prev" post={prev} />}
      {next && <PostNavLink label="next" rel="next" post={next} />}
    </nav>
  );
}

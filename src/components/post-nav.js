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

// One under the other at every width, like the rest of the site, which is a
// single column. The newer post comes first, the way the list on /blog runs:
// previous-then-next is an order for links sitting side by side.
export function PostNav({ prev, next }) {
  if (!prev && !next) {
    return null;
  }
  return (
    <nav
      aria-label="More posts"
      className="mt-8 grid gap-6 border-t border-gray-200 pt-6 dark:border-gray-700"
    >
      {next && <PostNavLink label="next" rel="next" post={next} />}
      {prev && <PostNavLink label="previous" rel="prev" post={prev} />}
    </nav>
  );
}

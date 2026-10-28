import Link from "next/link";

export function TagList({ tags, className = "" }) {
  if (!tags?.length) {
    return null;
  }
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tags/${tag}`}
          className="bg-accent-light text-accent-dark rounded px-2 py-1 text-xs hover:opacity-80 md:text-sm"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}

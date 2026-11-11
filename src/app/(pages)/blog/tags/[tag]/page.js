import Link from "next/link";
import { Container, PostList } from "@/components";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }) {
  const { tag } = await params;
  return createMetadata({
    title: `Blog: ${tag}`,
    description: `Posts tagged ${tag}.`,
    openGraph: {
      url: `${BASE_URL}/blog/tags/${tag}`,
    },
  });
}

export default async function BlogTag({ params }) {
  const { tag } = await params;
  return (
    <Container>
      <p className="text-accent mb-6 text-xs">
        # {tag}
        <Link
          href="/blog"
          aria-label="All posts"
          // Inline, so the vertical padding widens the target without moving
          // the line: the × stays 8px from the tag, as before.
          className="text-muted hover:text-accent py-3.5 pr-3.5 pl-2 transition-colors select-none"
        >
          ×
        </Link>
      </p>
      <PostList posts={getPostsByTag(tag)} />
    </Container>
  );
}

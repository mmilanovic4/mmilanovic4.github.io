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
          className="text-muted hover:text-accent ml-1 px-1 transition-colors select-none"
        >
          ×
        </Link>
      </p>
      <PostList posts={getPostsByTag(tag)} />
    </Container>
  );
}

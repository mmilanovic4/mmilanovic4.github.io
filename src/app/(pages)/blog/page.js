import { Container, PostList, TagList } from "@/components";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description: "Thoughts.",
  openGraph: {
    url: `${BASE_URL}/blog`,
  },
});

export default function Blog() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return (
    <Container>
      {tags.length > 0 && (
        <div className="mb-8">
          <p className="text-accent mb-3 text-xs"># tags</p>
          <TagList tags={tags} />
        </div>
      )}
      <p className="text-accent mb-3 text-xs"># blog</p>
      {posts.length === 0 ? (
        <p className="text-muted text-sm md:text-base lg:text-lg">
          Coming soon.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </Container>
  );
}

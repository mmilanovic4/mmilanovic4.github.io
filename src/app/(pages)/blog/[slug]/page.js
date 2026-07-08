import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import { Container, ProgressLine, mdxComponents } from "@/components";
import { formatDate, getAllPosts, getPost, getReadingTime } from "@/lib/blog";
import { BASE_URL, createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { meta } = getPost(slug);
  return createMetadata({
    title: meta.title ? `${meta.title}` : "Blog",
    description: meta.description,
    openGraph: {
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
    },
  });
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);
  const readingTime = getReadingTime(content);
  return (
    <Container>
      <ProgressLine />
      <span className="text-muted text-xs">
        {formatDate(meta.date)} · {readingTime} min read
      </span>
      <h2 className="text-strong my-3 text-lg font-bold">{meta.title}</h2>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />
      <article className="blog text-sm">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeExternalLinks,
                  { target: "_blank", rel: ["noopener", "noreferrer"] },
                ],
                [
                  rehypePrettyCode,
                  {
                    theme: "nord",
                    defaultLang: "plaintext",
                    langs: [
                      "plaintext",
                      "javascript",
                      "typescript",
                      "go",
                      "bash",
                    ],
                  },
                ],
              ],
            },
          }}
        />
      </article>
    </Container>
  );
}

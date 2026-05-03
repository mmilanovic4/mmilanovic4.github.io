import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import { Container } from "@/components";
import { mdxComponents } from "@/components/mdx-components";
import { getAllPosts, getPost } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { meta } = getPost(slug);
  return createMetadata({
    title: `Miloš Milanović | ${meta.title}`,
    description: meta.description,
    openGraph: {
      url: `https://mmilanovic4.github.io/blog/${slug}`,
      type: "article",
    },
  });
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);
  return (
    <Container>
      <time className="text-muted text-xs">{meta.date}</time>
      <h2 className="text-strong my-3 text-lg font-bold">{meta.title}</h2>
      <hr className="mb-6 border-gray-200 dark:border-gray-800" />
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
                    theme: "github-dark-dimmed",
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

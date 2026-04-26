import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import { mdxComponents } from "@/components/mdx-components";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { meta } = getPost(slug);
  return { title: `Miloš Milanović | ${meta.title}` };
}

const options = {
  theme: "github-dark-dimmed",
  defaultLang: "plaintext",
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);
  return (
    <div className="mx-auto mt-8 w-full max-w-full px-4 md:w-125 md:px-0">
      <time className="text-muted text-xs">{meta.date}</time>
      <h2 className="text-strong my-3 text-lg font-bold">{meta.title}</h2>
      <hr className="mb-6 border-gray-200 dark:border-gray-800" />
      <article className="text-sm">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, options]],
            },
          }}
        />
      </article>
    </div>
  );
}

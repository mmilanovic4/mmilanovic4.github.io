import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";

export const rehypePlugins = [
  [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
  [rehypePrettyCode, { theme: "nord", defaultLang: "plaintext" }],
];

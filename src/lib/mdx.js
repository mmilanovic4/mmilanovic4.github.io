import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";

// Gives every local image its width and height, read from the file, so the
// browser reserves its space before it loads. Without them a lazy image is 0px
// tall until it arrives: the text below jumps and the post grows under the
// reading progress line. A file it can't measure fails the build rather than
// quietly bringing the jump back. Videos are left alone: image-size reads
// images only.
function rehypeImageSize() {
  const measure = (node) => {
    const { src } = node.properties ?? {};
    if (
      node.tagName === "img" &&
      src?.startsWith("/") &&
      !/\.(mp4|webm)$/i.test(src)
    ) {
      const file = path.join(process.cwd(), "public", src);
      let size;
      try {
        size = imageSize(readFileSync(file));
      } catch (error) {
        throw new Error(`Can't read the size of ${src}: ${error.message}`);
      }
      // EXIF orientations 5-8 turn the photo a quarter turn, and browsers
      // honour them, so the stored sides swap.
      const turned = size.orientation >= 5;
      node.properties.width = turned ? size.height : size.width;
      node.properties.height = turned ? size.width : size.height;
    }
    node.children?.forEach(measure);
  };
  return measure;
}

export const rehypePlugins = [
  rehypeImageSize,
  [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
  [rehypePrettyCode, { theme: "nord", defaultLang: "plaintext" }],
];

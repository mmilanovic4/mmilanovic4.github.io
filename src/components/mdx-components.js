import Link from "next/link";

// Root-relative and without a file extension: another page on this site,
// not an asset like /rss.xml and not a protocol-relative //host URL.
const isInternalPage = (href) => /^\/(?!\/)[^.]*$/.test(href ?? "");

// `![Caption](/blog/clip.mp4)` plays a silent loop, so a post can hold a short
// clip with the same Markdown it uses for an image.
const isVideo = (src) => /\.(mp4|webm)$/i.test(src ?? "");

const Media = ({ src, alt, className = "w-full" }) =>
  isVideo(src) ? (
    <video
      src={src}
      aria-label={alt}
      className={`rounded ${className}`}
      autoPlay
      muted
      loop
      playsInline
    />
  ) : (
    // Lazy, so React leaves these out of the RSC preload hints: otherwise
    // every prefetched post link preloads that post's images.
    <img
      src={src}
      alt={alt}
      className={`rounded ${className}`}
      loading="lazy"
      decoding="async"
    />
  );

const Caption = ({ children }) => (
  <p className="text-muted mt-2 text-center text-xs md:text-sm lg:text-base">
    {children}
  </p>
);

export const mdxComponents = {
  a: ({ href, ...props }) =>
    isInternalPage(href) ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} {...props} />
    ),
  p: ({ children, ...props }) => {
    const childArray = Array.isArray(children) ? children : [children];
    const hasImage = childArray.some(
      (child) => child?.props?.src || child?.type?.name === "img",
    );

    // Images on consecutive lines, with no blank line between them, share a
    // paragraph and sit side by side, cropped to the same shape.
    const images = childArray.filter((child) => child?.props?.src);
    const onlyImages = childArray.every(
      (child) => child?.props?.src || /^\s*$/.test(child ?? ""),
    );

    if (images.length > 1 && onlyImages) {
      return (
        <div className="media-wide my-6 grid grid-cols-2 gap-2 md:gap-3">
          {images.map(({ props: { src, alt } }) => (
            <figure key={src}>
              <Media
                src={src}
                alt={alt}
                className="aspect-[3/4] w-full object-cover"
              />
              {alt && <Caption>{alt}</Caption>}
            </figure>
          ))}
        </div>
      );
    }

    if (hasImage) return <>{childArray}</>;

    // A paragraph that is nothing but emphasis (`_Added 30.09.2026._`) is a
    // note about the text, not part of it, so it gets the same muted, one-step
    // smaller treatment as the post date and image captions.
    const isNote = childArray.length === 1 && childArray[0]?.type === "em";

    if (isNote) {
      return (
        <p
          className="text-muted mb-4 text-xs md:text-sm lg:text-base"
          {...props}
        >
          {children}
        </p>
      );
    }

    return (
      <p className="mb-4 text-left leading-loose md:text-justify" {...props}>
        {children}
      </p>
    );
  },
  h2: (props) => (
    <h2
      className="text-strong mt-8 mb-3 text-base font-bold md:text-lg lg:text-xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-strong mt-6 mb-2 text-sm font-bold md:text-base lg:text-lg"
      {...props}
    />
  ),
  img: ({ src, alt }) => (
    <div className="media-wide my-6">
      {/* A clip on its own is usually a portrait one from a phone: capped at
          the screen height instead of stretched to the column's width. */}
      <Media
        src={src}
        alt={alt}
        className={isVideo(src) ? "mx-auto max-h-[80vh] w-auto" : undefined}
      />
      {alt && <Caption>{alt}</Caption>}
    </div>
  ),
  figure: (props) => <figure className="my-4" {...props} />,
  ul: (props) => (
    <ul
      className="mb-4 list-disc pl-5 text-sm leading-loose md:text-base lg:text-lg"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-4 list-decimal pl-5 text-sm leading-loose md:text-base lg:text-lg"
      {...props}
    />
  ),
  li: (props) => <li className="mb-1" {...props} />,
};

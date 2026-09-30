export const mdxComponents = {
  p: ({ children, ...props }) => {
    const childArray = Array.isArray(children) ? children : [children];
    const hasImage = childArray.some(
      (child) => child?.props?.src || child?.type?.name === "img",
    );

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
      <img src={src} alt={alt} className="w-full rounded" />
      {alt && (
        <p className="text-muted mt-2 text-center text-xs md:text-sm lg:text-base">
          {alt}
        </p>
      )}
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

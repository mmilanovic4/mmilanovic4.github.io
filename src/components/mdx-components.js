export const mdxComponents = {
  p: ({ children, ...props }) => {
    const childArray = Array.isArray(children) ? children : [children];
    const hasImage = childArray.some(
      (child) => child?.props?.src || child?.type?.name === "img",
    );

    if (hasImage) return <>{childArray}</>;

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

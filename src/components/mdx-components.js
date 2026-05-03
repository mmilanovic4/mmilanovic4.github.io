export const mdxComponents = {
  p: ({ children, ...props }) => {
    const childArray = Array.isArray(children) ? children : [children];
    const hasImage = childArray.some(
      (child) => child?.props?.src || child?.type?.name === "img",
    );

    if (hasImage) return <>{childArray}</>;

    return (
      <p className="mb-4 text-justify leading-loose" {...props}>
        {children}
      </p>
    );
  },
  h2: (props) => (
    <h2 className="text-strong mt-8 mb-3 text-base font-bold" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-strong mt-6 mb-2 text-sm font-bold" {...props} />
  ),
  img: ({ src, alt }) => (
    <div className="my-6">
      <img src={src} alt={alt} className="w-full rounded" />
      {alt && <p className="text-muted mt-2 text-center text-xs">{alt}</p>}
    </div>
  ),
  figure: (props) => <figure className="my-4" {...props} />,
  ul: (props) => (
    <ul className="mb-4 list-disc pl-5 text-sm leading-loose" {...props} />
  ),
  li: (props) => <li className="mb-1" {...props} />,
};

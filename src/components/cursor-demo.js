// Every keyword of the CSS `cursor` property, in MDN's six groups, each on a
// tile that shows its cursor on hover. No JavaScript: the browser swaps the
// cursor itself. Phones and touch-only tablets have no pointer to change, so
// there the demo gives way to a one-line note instead of a grid that does
// nothing.
const GROUPS = [
  ["General", ["auto", "default", "none"]],
  ["Links and status", ["pointer", "help", "context-menu", "progress", "wait"]],
  ["Selection", ["text", "vertical-text", "cell", "crosshair"]],
  [
    "Drag and drop",
    ["grab", "grabbing", "move", "copy", "alias", "no-drop", "not-allowed"],
  ],
  [
    "Resizing and scrolling",
    [
      "col-resize",
      "row-resize",
      "n-resize",
      "e-resize",
      "s-resize",
      "w-resize",
      "ne-resize",
      "nw-resize",
      "se-resize",
      "sw-resize",
      "ew-resize",
      "ns-resize",
      "nesw-resize",
      "nwse-resize",
      "all-scroll",
    ],
  ],
  ["Zooming", ["zoom-in", "zoom-out"]],
];

export function CursorDemo() {
  return (
    <figure className="my-6 text-left hyphens-none">
      <div className="hidden any-pointer-fine:block">
        {GROUPS.map(([name, keywords]) => (
          <div key={name} className="mb-4">
            <p className="text-muted mb-2 text-xs md:text-sm">{name}</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {keywords.map((keyword) => (
                <div
                  key={keyword}
                  style={{ cursor: keyword }}
                  className="hover:border-accent hover:bg-accent-light rounded border border-gray-200 px-3 py-3 font-mono text-xs md:text-sm dark:border-gray-700"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        ))}
        <figcaption className="text-muted mt-2 text-center text-xs md:text-sm lg:text-base">
          Hover a tile to see its cursor
        </figcaption>
      </div>
      <p className="text-muted text-center text-xs md:text-sm lg:text-base any-pointer-fine:hidden">
        Every cursor in this list can be tried by hovering, with a mouse or a
        trackpad.
      </p>
    </figure>
  );
}

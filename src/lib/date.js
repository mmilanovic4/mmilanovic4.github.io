// Apart from lib/blog: components import this, and the barrel they share
// reaches the client header, which must not pull in fs and gray-matter.
export function formatDate(date) {
  // "2026-06-08" parses as UTC midnight, so format in UTC too: the build
  // machine's zone turned it into 07.06.2026 anywhere west of UTC.
  return new Date(date)
    .toLocaleDateString("sr-RS", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    })
    .replace(/\.$/, "");
}

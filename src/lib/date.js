// Apart from lib/blog: components import this, and the barrel they share
// reaches the client header, which must not pull in fs and gray-matter.

// The one place the site's date format lives: every date on a page goes
// through formatDate, so changing these two changes all of them.
// Nov 4, 2026 -- the month as a word, so it reads the same to someone who
// writes day first and someone who writes month first.
const LOCALE = "en-US";
const FORMAT = { day: "numeric", month: "short", year: "numeric" };

export function formatDate(date) {
  // "2026-06-08" parses as UTC midnight, so format in UTC too: the build
  // machine's zone turned it into the 7th anywhere west of UTC.
  return new Date(date).toLocaleDateString(LOCALE, {
    ...FORMAT,
    timeZone: "UTC",
  });
}

export const BASE_URL = "https://milos.fyi";

export const AUTHOR = "Miloš Milanović";

const baseOpenGraph = {
  siteName: AUTHOR,
  locale: "en_US",
  type: "website",
  images: [
    {
      url: `${BASE_URL}/profile.jpg`,
      width: 1000,
      height: 750,
      alt: AUTHOR,
    },
  ],
};

const baseTwitter = {
  card: "summary_large_image",
  images: [`${BASE_URL}/profile.jpg`],
};

const baseMeta = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: AUTHOR, url: BASE_URL }],
  verification: {},
};

export function createMetadata({ title, description, openGraph = {} }) {
  return {
    ...baseMeta,
    title: title ? `${AUTHOR} | ${title}` : title,
    description: description
      ? description
      : "Full-stack web developer based in Belgrade, Serbia.",
    alternates: {
      canonical: openGraph.url ?? BASE_URL,
    },
    openGraph: {
      ...baseOpenGraph,
      title,
      description,
      url: BASE_URL,
      ...openGraph,
    },
    twitter: {
      ...baseTwitter,
      title,
      description,
    },
  };
}

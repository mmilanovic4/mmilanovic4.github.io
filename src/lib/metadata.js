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
  const parsedTitle = title ? `${title} | ${AUTHOR}` : AUTHOR;
  const parsedDescription = description
    ? description
    : "Full-stack web developer based in Belgrade, Serbia.";
  return {
    ...baseMeta,
    title: parsedTitle,
    description: parsedDescription,
    alternates: {
      canonical: openGraph.url ?? BASE_URL,
      types: {
        "application/rss+xml": [{ url: "/rss.xml", title: AUTHOR }],
      },
    },
    openGraph: {
      ...baseOpenGraph,
      title: parsedTitle,
      description: parsedDescription,
      url: BASE_URL,
      ...openGraph,
    },
    twitter: {
      ...baseTwitter,
      title: parsedTitle,
      description: parsedDescription,
    },
  };
}

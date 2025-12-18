import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const NEXT_PUBLIC_GA_ID = "G-QMSQLXMNWC";

export const metadata = {
  title: "Miloš Milanović",
  description: "Full-stack web developer based in Belgrade, Serbia.",
  icons: {
    icon: "/favicon.ico",
    apple: "/profile.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mmilanovic4.github.io/",
  },
  authors: [{ name: "Miloš Milanović", url: "https://mmilanovic4.github.io/" }],
  verification: {},
  openGraph: {
    title: "Miloš Milanović",
    description: "Full-stack web developer based in Belgrade, Serbia.",
    url: "https://mmilanovic4.github.io/",
    siteName: "Miloš Milanović",
    images: [
      {
        url: "https://mmilanovic4.github.io/profile.jpg",
        width: 1000,
        height: 750,
        alt: "Miloš Milanović",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miloš Milanović",
    description: "Full-stack web developer based in Belgrade, Serbia.",
    images: ["https://mmilanovic4.github.io/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="mx-auto mb-8 w-125 max-w-full">{children}</main>
          <Footer />
        </div>
        <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}

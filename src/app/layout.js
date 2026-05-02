import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono } from "next/font/google";

import { Footer, Header, ThemeProvider } from "@/components";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Miloš Milanović",
  description: "Full-stack web developer based in Belgrade, Serbia.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
        url: "https://mmilanovic4.github.io/profile.webp",
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
    images: ["https://mmilanovic4.github.io/profile.webp"],
  },
};

const theme = process.env.NEXT_PUBLIC_THEME || "blue";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`theme-${theme}`}>
      <body className={`${jetbrainsMono.className} subpixel-antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mb-8 w-full max-w-full px-6 md:px-0">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}

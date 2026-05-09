import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono } from "next/font/google";
import { Footer, Header, ThemeProvider } from "@/components";
import { createMetadata } from "@/lib/metadata";

import "./globals.css";

const font = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata = createMetadata({
  title: "Miloš Milanović",
  description: "Full-stack web developer based in Belgrade, Serbia.",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const theme = process.env.NEXT_PUBLIC_THEME || "blue";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`theme-${theme}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        try {
          var theme = localStorage.getItem('theme');
          if (theme === 'dark') document.documentElement.classList.add('dark');
        } catch(e) {}
      `,
          }}
        />
      </head>
      <body className={`${font.className} subpixel-antialiased`}>
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

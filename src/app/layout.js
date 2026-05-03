import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono } from "next/font/google";
import { Footer, Header, ThemeProvider } from "@/components";
import { createMetadata } from "@/lib/metadata";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = createMetadata({
  title: "Miloš Milanović",
  description: "Full-stack web developer based in Belgrade, Serbia.",
});

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

import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Miloš Milanović",
  description: "Full-stack web developer based in Belgrade, Serbia.",
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
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="max-w-full w-[500px] mx-auto mb-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

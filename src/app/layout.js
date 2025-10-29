import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Miloš Milanović",
  description: "Full-stack web developer based in Belgrade, Serbia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="max-w-full w-[500px] mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

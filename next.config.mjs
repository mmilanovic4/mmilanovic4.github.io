import { generateRSS } from "./src/lib/rss.js";

const nextConfig = {
  reactCompiler: true,
  output: "export",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === "production") {
  generateRSS();
}

export default nextConfig;

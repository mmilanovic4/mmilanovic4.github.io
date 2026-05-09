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

export default nextConfig;

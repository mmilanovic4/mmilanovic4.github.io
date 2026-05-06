const nextConfig = {
  reactCompiler: true,
  output: "export",
  compiler: {
    removeConsole: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

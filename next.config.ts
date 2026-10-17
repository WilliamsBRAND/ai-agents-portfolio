import type { NextConfig } from "next";
import path from "path";

/**
 * The agentic AI portfolio lives at https://tomidewilliams.com/ai. The base path makes every page,
 * image and script load from /ai, and a small router project on tomidewilliams.com forwards /ai to
 * this project. The old address, portfolio.tomidewilliams.com, now redirects to the new one.
 */
const nextConfig: NextConfig = {
  basePath: "/ai",
  images: { loaderFile: "./src/image-loader.ts" },
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio.tomidewilliams.com" }],
        destination: "https://tomidewilliams.com/ai/:path*",
        basePath: false,
        permanent: false,
      },
      { source: "/", destination: "/ai", basePath: false, permanent: false },
    ];
  },
};

export default nextConfig;
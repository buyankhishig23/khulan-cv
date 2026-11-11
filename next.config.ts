import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The page is fully static: `next build` writes it to ./out.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

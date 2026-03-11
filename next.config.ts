import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: "standalone", // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

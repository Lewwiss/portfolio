import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    validateRSCRequestHeaders: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

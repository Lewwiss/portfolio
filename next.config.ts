import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    validateRSCRequestHeaders: true,
  },
};

export default nextConfig;

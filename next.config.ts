import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  serverExternalPackages: ["@clerk/nextjs"],
};

export default nextConfig;
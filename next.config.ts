import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['mongoose'],
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  // Ensure proper handling of environment variables
  async rewrites() {
    return [];
  },
};

export default nextConfig;

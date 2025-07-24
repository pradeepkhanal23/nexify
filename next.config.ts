import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
        protocol: "https",
      },
      {
        hostname: "byxuybakuplqfmksdfol.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

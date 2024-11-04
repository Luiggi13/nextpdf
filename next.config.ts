import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'standalone',
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pagedone.io',
        port: '',
        pathname: '/asset/uploads/**',
      }
    ]
   }
};

export default nextConfig;

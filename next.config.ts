import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.etn.com.mx',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;

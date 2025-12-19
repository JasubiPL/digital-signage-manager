import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etn.com.mx',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'edfgnazbgavhelbjgvfm.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};
export default nextConfig;

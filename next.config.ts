import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'lifesciences.smdmedicare.in',
      },
      {
        protocol: 'https',
        hostname: 'www.smdmedicare.in',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/biotech',
        destination: '/',
        permanent: true,
      },
      {
        source: '/biotech/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
